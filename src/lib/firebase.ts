import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, memoryLocalCache } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

let firestoreInstance;

try {
  // In an iframe (like the AI Studio preview environment), persistent storage or tab synchronization (IndexedDB/BroadcastChannel) 
  // is often blocked or partitioned by browser privacy policies, leading to connection deadlocks or "unavailable" connection failures.
  // We automatically detect if we are in an iframe or if storage is constrained, and use memoryLocalCache() as a safe, highly-compatible fallback.
  const isIframe = typeof window !== 'undefined' && window.self !== window.top;

  firestoreInstance = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    localCache: isIframe
      ? memoryLocalCache()
      : persistentLocalCache({
          tabManager: persistentMultipleTabManager()
        })
  }, firebaseConfig.firestoreDatabaseId);
} catch (e) {
  console.warn("Failed to initialize Firestore with persistent local cache, falling back to memory cache:", e);
  try {
    firestoreInstance = initializeFirestore(app, {
      experimentalForceLongPolling: true,
      localCache: memoryLocalCache()
    }, firebaseConfig.firestoreDatabaseId);
  } catch (err) {
    // If already initialized or other error, fallback to standard getFirestore/default configuration
    console.error("Critical Firestore initialization failure:", err);
  }
}

export const db = firestoreInstance;
export const auth = getAuth(app);

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
