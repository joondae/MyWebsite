//firestore will automatically create the collection & document for you instead of having to manually make it on the backend

const chocolateInput = $("#chocolate_input");
const latestChocolateVote = $("#latest_vote");
const voteOnChocolate = $("#vote_chocolate");
const chocolateOutput = $("#chocolate_output");

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

function submitChocolateVote() {
    console.log('submitting chocolate vote: ' + chocolateInput.val());
    databaseDocumentRef.set(
      {
          latestRating : chocolateInput.val(),
          exampleData: 1
      }
    ).then(voteSuccess).catch(generalErrorHandler); //using dot notation to execute more functions right after you run a function
}



voteOnChocolate.click(submitChocolateVote); 

function getChocolateVoteDocument(doc) {
  if(doc && doc.exists) {
    var myData = doc.data();
    chocolateOutput.html(myData.latestRating);
  }
}

function getLatestVote() {
  //.then will return result from previously called function
  databaseDocumentRef.get().then(getChocolateVoteDocument).catch(generalErrorHandler);
}

latestChocolateVote.click(getLatestVote);

function getRealTimeUpdate() {
  databaseDocumentRef.onSnapshot(getChocolateVoteDocument)
}

getRealTimeUpdate();
