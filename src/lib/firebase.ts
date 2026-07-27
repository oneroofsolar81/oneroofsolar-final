import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, memoryLocalCache, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

let firestoreInstance: any;

try {
  // In an iframe (like the AI Studio preview environment), persistent storage or tab synchronization (IndexedDB/BroadcastChannel) 
  // can be partitioned or blocked, leading to connection issues.
  // Using memoryLocalCache and experimentalAutoDetectLongPolling provides high compatibility and resilience.
  const isIframe = typeof window !== 'undefined' && window.self !== window.top;

  firestoreInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    localCache: isIframe
      ? memoryLocalCache()
      : persistentLocalCache({
          tabManager: persistentMultipleTabManager()
        })
  }, firebaseConfig.firestoreDatabaseId);
} catch (e) {
  console.warn("Failed to initialize Firestore with settings, falling back to default memory cache:", e);
  try {
    firestoreInstance = initializeFirestore(app, {
      experimentalAutoDetectLongPolling: true,
      localCache: memoryLocalCache()
    }, firebaseConfig.firestoreDatabaseId);
  } catch (err) {
    console.error("Critical Firestore initialization failure:", err);
  }
}

export const db = firestoreInstance;
export const auth = getAuth(app);

// Non-blocking connection check
if (typeof window !== 'undefined' && db) {
  setTimeout(async () => {
    try {
      await getDocFromServer(doc(db, '_connection_test', 'ping'));
    } catch (error) {
      if (error instanceof Error && error.message.includes('offline')) {
        console.warn("Firestore client is operating in offline mode.");
      }
    }
  }, 1000);
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
