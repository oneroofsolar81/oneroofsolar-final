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
      const batch = writeBatch(db);
      let writes = 0;

      if (!docSnap.exists()) {
        console.log("Empty database detected. Auto-seeding default data client-side...");
        for (const page of DEFAULT_PAGES) {
          const ref = doc(db, 'pages', page.id);
          batch.set(ref, page.data, { merge: true });
          writes++;
        }
      }

      for (const service of DEFAULT_SERVICES) {
        const ref = doc(db, 'services', service.slug);
        const existing = await getDoc(ref);
        const image = existing.data()?.image as string | undefined;
        const needsLocalImage =
          !existing.exists() ||
          !image ||
          (/^https?:\/\//i.test(image) && !/oneroofsolar\.com\.au\/assets\//i.test(image));
        if (!existing.exists()) {
          batch.set(ref, {
            title: service.title,
            description: service.description,
            features: service.features,
            image: service.image
          }, { merge: true });
          writes++;
        } else if (needsLocalImage) {
          batch.set(ref, { image: service.image }, { merge: true });
          writes++;
        }
      }

      if (writes) {
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
