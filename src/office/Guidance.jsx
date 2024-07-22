import './office.css';
import EditIcon from './icons8-edit-24 (2).png'


function Guidance() {
  // Example data for guidance office questions
  const guidanceQuestions = [
    { id: 1, text: '1. Ang mga serbisyong ibinibigay ng "guidance" ay malawak na naipapaabot sa lahat.' },
    { id: 2, text: '2. May mga programa upang alalayan ang mga mag-aaral sa kanilang pagpili ng bokasyon.' },
    { id: 3, text: '3. Ang mga tala ng mga mag-aaral na nakalap mula sa mga panayam, pangsikolohiyang pagsusulit ay maayos na nakahanay' },
    { id: 4, text: '4. May "counselors" na nakalaang magbigay ng payo, gumabay sa mga mag-aaral batay sa mga resulta ng mga pagsusulit na kanilang kinuha sa gayo\'y makagawa sila ng mabisang desisyon para sa sarili.' },
    { id: 5, text: '5. May mga programang nakalaan para sa mga naghahanap ng trabaho, mga nakapagtapos na o mga nahinto sa pag-aaral.' },

    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {guidanceQuestions.map((question) => (
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

export default Guidance;
