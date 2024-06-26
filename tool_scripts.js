const comparisons = {
  'smoking-vaping': {
    smoking: {
      text: "Smoking involves burning tobacco, which releases nicotine rapidly into the bloodstream, making it highly addictive and exposing users to over 7,000 chemicals, including at least 70 known carcinogens.",
      icon: "fas fa-smoking",
      title: "Smoking"
    },
    vaping: {
      text: "Vaping simulates smoking by heating a liquid to create vapor. It contains fewer harmful chemicals and delivers nicotine more slowly, reducing its addiction potential.",
      icon: "fas fa-cloud",
      title: "Vaping"
    }
  },
  'chemical-exposure': {
    smoking: {
      text: "Contains over 7,000 chemicals, many of which are toxic and over 70 of which are known carcinogens (CDC, American Lung Association).",
      icon: "fas fa-flask"
    },
    vaping: {
      text: "Typically contains 2-5 main ingredients in the e-liquid, resulting in significantly fewer chemicals in the vapor, greatly reducing the exposure to harmful substances (Public Health England).",
      icon: "fas fa-flask"
    }
  },
  'health-risks': {
    smoking: {
      text: "Directly linked to numerous health issues including lung cancer, COPD, and heart disease (American Cancer Society).",
      icon: "fas fa-lungs"
    },
    vaping: {
      text: "Associated with fewer health risks compared to smoking. The risk of lung cancer and other respiratory diseases is significantly lower (Royal College of Physicians).",
      icon: "fas fa-heart"
    }
  },
  'addiction-potential': {
    smoking: {
      text: "Delivers high levels of nicotine very rapidly to the brain, significantly enhancing its addictive potential (NIH).",
      icon: "fas fa-brain"
    },
    vaping: {
      text: "Features slower nicotine delivery and generally lower nicotine content, which may reduce addiction potential. Vaping devices vary in how much nicotine they deliver (Public Health England).",
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
