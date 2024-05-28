// tool_scripts.js

const comparisons = {
  'smoking-vaping': {
    smoking: {
      text: "",
      icon: "fas fa-smoking",
      title: "Smoking"
    },
    vaping: {
      text: "",
      icon: "fas fa-cloud",
      title: "Vaping"
    }
  },
  'chemical-exposure': {
    smoking: {
      text: "Contains over 7,000 chemicals, with 70 known carcinogens (CDC, American Lung Association).",
      icon: "fas fa-flask"
    },
    vaping: {
      text: "Contains fewer chemicals; e-liquids have 2-5 main ingredients (Public Health England).",
      icon: "fas fa-flask"
    }
  },
  'health-risks': {
    smoking: {
      text: "Causes lung cancer, COPD, heart disease (American Cancer Society).",
      icon: "fas fa-lungs"
    },
    vaping: {
      text: "Reduced risk of lung cancer, lower levels of harmful chemicals (Royal College of Physicians).",
      icon: "fas fa-heart"
    }
  },
  'addiction-potential': {
    smoking: {
      text: "High addiction due to nicotine and rapid delivery to the brain (NIH).",
      icon: "fas fa-brain"
    },
    vaping: {
      text: "Contains nicotine but with varying levels and slower delivery, reducing addiction potential (Public Health England).",
      icon: "fas fa-brain"
    }
  }
};

function updateComparison(isChecked) {
  const smokingVapingBox = document.getElementById('smoking-vaping-box');
  const smokingVapingIcon = document.getElementById('smoking-vaping-icon');
  const smokingVapingTitle = document.getElementById('smoking-vaping-title');
  const smokingVapingText = document.getElementById('smoking-vaping-text');

  const smokingContent = comparisons['smoking-vaping'].smoking;
  const vapingContent = comparisons['smoking-vaping'].vaping;

  const currentContent = isChecked ? vapingContent : smokingContent;

  smokingVapingIcon.className = currentContent.icon;
  smokingVapingTitle.innerText = currentContent.title;
  smokingVapingText.innerText = currentContent.text;

  smokingVapingBox.style.background = isChecked ? 'linear-gradient(to right, #56ab2f, #a8e063)' : 'linear-gradient(to right, #ff5f6d, #ffc371)';

  const boxes = ['chemical-exposure', 'health-risks', 'addiction-potential'];
  
  boxes.forEach(box => {
    const boxElement = document.getElementById(`${box}-box`);
    const iconElement = document.getElementById(`${box}-icon`);
    const textElement = document.getElementById(`${box}-text`);
    
    const boxSmokingContent = comparisons[box].smoking;
    const boxVapingContent = comparisons[box].vaping;

    const boxCurrentContent = isChecked ? boxVapingContent : boxSmokingContent;
    
    iconElement.className = boxCurrentContent.icon;
    textElement.innerText = boxCurrentContent.text;
    
    boxElement.style.background = isChecked ? 'linear-gradient(to right, #56ab2f, #a8e063)' : 'linear-gradient(to right, #ff5f6d, #ffc371)';
  });
}

window.updateComparison = updateComparison; // Expose it globally
updateComparison(document.getElementById('comparison-toggle').checked); // Initialize with current state
