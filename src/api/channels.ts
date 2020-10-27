import firebase, { firestore } from '../firebaseConf'

export interface Channel {
  key: string,
  title: string,
}

const collection = firestore.collection('channels')

export const subscribe = (successCallback: (data: Channel[]) => void, errorCallback?: (error: firebase.firestore.FirestoreError) => void) => {
  const unsubscribe = collection.onSnapshot(
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
  })
}
