import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const linkCreated = functions.firestore
  .document('users/{userUid}/links/{linkID}')
  .onCreate(async (snapshot, context) => {
    const { userUid, linkID } = context.params;
    const { longUrl, shortUrl } = snapshot.data();
    
    const linkRef = admin.firestore().doc(`links/${shortUrl}`);
    await linkRef.set({ longUrl, userUid, linkID });

    console.log('Link created:', linkID);
 
    
  });

  export const linkDeleted = functions.firestore
  .document('users/{userUid}/links/{linkID}')
  .onDelete(async (snapshot, context) => {
    const { shortUrl } = snapshot.data();
    
    const linkRef = admin.firestore().doc(`links/${shortUrl}`);
    await linkRef.delete();

    console.log('Link deleted:', context.params.linkID);
  });