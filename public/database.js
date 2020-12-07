//firestore will automatically create the collection & document for you instead of having to manually make it on the backend

const guitarVoteInput = $("#guitar_vote_input");
const latestFavoriteGuitarVote = $("#latest_vote");
const voteOnFavoriteGuitar = $("#guitar_vote_button");
const guitarVoteOutput = $("#guitar_vote_output");

//checks to make sure all firestore configs are correct
var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("guitars/favoriteguitar");
//const databaseDocumentRef = firestore.doc("chocolates/latestChocolateRating");



function voteSuccess() {
  console.log("vote saved!");
}

function generalErrorHandler(errer) {
    console.log("Got an error", error);
};

function submitFavoriteGuitarVote() {
    console.log('submitting favorite guitar vote: ' + guitarVoteInput.val());
    databaseDocumentRef.set(
      {
          latestRating : guitarVoteInput.val(),
          exampleData: 1
      }
    ).then(voteSuccess).catch(generalErrorHandler); //using dot notation to execute more functions right after you run a function
}



voteOnFavoriteGuitar.click(submitFavoriteGuitarVote); 

function getFavoriteGuitarVoteDocument(doc) {
  if(doc && doc.exists) {
    var myData = doc.data();
    guitarVoteOutput.html(myData.latestRating);
  }
}

function getLatestVote() {
  //.then will return result from previously called function
  databaseDocumentRef.get().then(getFavoriteGuitarVoteDocument).catch(generalErrorHandler);
}

latestFavoriteGuitarVote.click(getLatestVote);

//uncomment if you want latest vote to update automatically w/o user having to click "Get Latest Vote" button
/*
function getRealTimeUpdate() {
  databaseDocumentRef.onSnapshot(getFavoriteGuitarVoteDocument)
}

getRealTimeUpdate();
*/
