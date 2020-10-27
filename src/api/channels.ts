import firebase, { firestore } from '../firebaseConf'

export interface Channel {
  key: string,
  title: string,
  date: number,
}

const collection = firestore.collection('channels')

export const exist = (channelKey: string): Promise<boolean> => {
  return collection.doc(channelKey)
    .get()
    .then((docSnapshot) => docSnapshot.exists)
}

export const subscribe = (successCallback: (data: Channel[]) => void, errorCallback?: (error: firebase.firestore.FirestoreError) => void) => {
  const unsubscribe = collection.orderBy('date', 'asc').onSnapshot(
    (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })) as Channel[]
      successCallback(data)
    },
    errorCallback
  )

  return unsubscribe
}

export const add = (title: string) => {
  return collection.add({
    title,
    date: Date.now(),
  })
}
