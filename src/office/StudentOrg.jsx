import './office.css';
import EditIcon from './icons8-edit-24 (2).png'


function StudentOrg() {
  // Example data for student organization office questions
  const studentOrgQuestions = [
    { id: 1, text: '1. Ang mga mag-aaral ay binibigyan ng karanasan sa pagkatuto upang malinang ang kanilang mga katangiar bilang epektibong lider at tagasunod.' },
    { id: 2, text: '2. May mga programa upang malinang ang mga kaalaman at katangian sa pamamahala sa tao.' },
    { id: 3, text: '3. Ang pagkakaisa at pagtutulungan ay pinananatili sa mga pangkating gawain.' },
    { id: 4, text: '4. May mga laang pagkakataon upang sanayin ang kakayahan sa paggawa ng mga pagpapasiya.' },
    { id: 5, text: '5. Ang mga mag-aaral ay inaanyayahang makilahok sa mga proyektong pampamayanan upang makatagpo ng mga bagong karanasan.' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {studentOrgQuestions.map((question) => (
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

export default StudentOrg;
