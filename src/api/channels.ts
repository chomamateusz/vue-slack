import firebase, { firestore } from '../firebaseConf'

export interface Channel {
  key: string,
  title: string,
}

export const subscribe = (successCallback: (data: Channel[]) => void, errorCallback?: (error: firebase.firestore.FirestoreError) => void) => {
  const unsubscribe = firestore.collection('channels').onSnapshot(
    (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })) as Channel[]
      successCallback(data)
    },
    errorCallback
  )

  return unsubscribe
}
