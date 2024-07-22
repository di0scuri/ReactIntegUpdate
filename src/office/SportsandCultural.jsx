import './office.css';
import EditIcon from './icons8-edit-24 (2).png'


function SportsandCultural() {
  // Example data for sports and cultural office questions
  const sportsCulturalQuestions = [
    { id: 1, text: '1. May mga programa na nagbibigay ng pagkakataon upang makilahok ang mga mag-aaral sa mga gawain tulad ng isports, drama, pagtugtog, pagsayaw at iba pang anyo ng sining.' },
    { id: 2, text: '' },
    { id: 3, text: '' },
    { id: 4, text: '' },
    { id: 5, text: '' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {sportsCulturalQuestions.map((question) => (
          <div key={question.id} className="question-card">
            <p>{question.text}</p>
            <button>
              <img src={EditIcon} alt="Edit" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsandCultural;
