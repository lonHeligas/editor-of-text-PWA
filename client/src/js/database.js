import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {  
  const databaseVar = await openDB('jateDb', 1);  
  const dbTransaction = jateDb.transaction('jateDb', 'readwrite');
  const storeVar = tx.objectStore('jateDb');  
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};


export const getDb = async () => {    
  const databaseVar = await openDB('jateDb', 1);
  const dbTransaction = jateDb.transaction('jateDb', 'readonly');
  const storeVar = tx.objectStore('jateDb');
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');  
  return result?.value;
};

initdb();
