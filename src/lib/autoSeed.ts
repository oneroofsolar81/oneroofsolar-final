import { doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "./firebase";
import { DEFAULT_PAGES, DEFAULT_SERVICES } from "./defaultData";

let seedingPromise: Promise<void> | null = null;

export function ensureDatabaseSeeded(): Promise<void> {
  if (seedingPromise) return seedingPromise;

  seedingPromise = (async () => {
    try {
      const homeRef = doc(db, 'pages', 'home');
      const docSnap = await getDoc(homeRef);
      if (!docSnap.exists()) {
        console.log("Empty database detected. Auto-seeding default data client-side...");
        const batch = writeBatch(db);

        for (const service of DEFAULT_SERVICES) {
          const ref = doc(db, 'services', service.slug);
          batch.set(ref, {
            title: service.title,
            description: service.description,
            features: service.features,
            image: service.image
          }, { merge: true });
        }

        for (const page of DEFAULT_PAGES) {
          const ref = doc(db, 'pages', page.id);
          batch.set(ref, page.data, { merge: true });
        }

        await batch.commit();
        console.log("Auto-seeding client-side completed successfully!");
      }
    } catch (error) {
      console.warn("Client-side auto-seed check skipped or failed:", error);
    }
  })();

  return seedingPromise;
}
export default ensureDatabaseSeeded;
