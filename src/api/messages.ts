import firebase, { firestore } from '../firebaseConf'

import store from '../store'

export interface Message {
  key: string,
  text: string,
  date: number,
  author: {
    email: string,
    avatar: string,
    displayName: string,
  },
}

const collection = firestore.collection('messages')

export const subscribe = (channelKey: string) => (successCallback: (data: Message[]) => void, errorCallback?: (error: firebase.firestore.FirestoreError) => void) => {
  const unsubscribe = collection
    .where('channelKey', '==', channelKey)
    .onSnapshot(
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })) as Message[]
        const dataSorted = data.sort(({ date: dateA }, { date: dateB }) => dateA - dateB)
        successCallback(dataSorted)
      },
      errorCallback
    )

  return unsubscribe
}

export const add = (channelKey: string) => (text: string) => {
  const userData = store.state.auth?.userData

  return collection.add({
    text,
    date: Date.now(),
    author: userData,
    channelKey,
  })
}
