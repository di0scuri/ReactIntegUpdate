import './office.css';
import EditIcon from './icons8-edit-24 (2).png'


function Scholarship() {
  // Example data for scholarship office questions
  const scholarshipQuestions = [
    { id: 1, text: '1. Ang mga anunsyo sa mga nakalaang "scholarship" sa mga mag- aaral ay naipaaabot sa bawat kolehiyo ng Institusyon.' },
    { id: 2, text: '2. May inihandang sistema sa paraan ng pagpili ng mga iskolar upang masiguro na ang mga pagkakalooban ay karapat-dapat at tunay na nangangailangan.' },
    { id: 3, text: '3. May programa upang madagdagan ang mga magkakaroon ng scholarship na mga pribadong indibidwal' },
    { id: 4, text: '4. Mahigpit na ipinatutupad ang mga kondisyong kaakibat ng uri ng scholarship na natamo ng isang mag-aaral.' },
    { id: 5, text: '5. Ang mga tauhan ng tanggapan ay madaling lapitan, maayos magpaliwanag at may kaida-igavand personalidad.' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {scholarshipQuestions.map((question) => (
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

export default Scholarship;
