const dummyAPIResponse = {
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function callFeatureFlagsDataService() {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) {
      setTimeout(() => {
        resolve(dummyAPIResponse);
      }, 1000);
    } else {
      reject("Error occured, try again");
    }
  });
}

export default callFeatureFlagsDataService;
