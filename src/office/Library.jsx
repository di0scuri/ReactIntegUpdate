
import './office.css';
import EditIcon from './icons8-edit-24 (2).png'

function Library() {
  // Example data for library office questions
  const libraryQuestions = [
    { id: 1, text: '1. Ang mga bagong mag-aaral ay binibigyan ng oryentasyon sa tama at maayos na paggamit ng aklatan.' },
    { id: 2, text: '2. May mga nakapaskil na talatakdaan sa paggamit ng aklatan gayundin ng mga alituntuning dapat sundin ng mga gagamit dito.' },
    { id: 3, text: '3. Ang aklatan ay may sistema sa pagkakatalog at laging "up-to-date" ang mga aklat at kagamitan.' },
    { id: 4, text: '4. Ang aklatan ay may mga kagamitan tulad ng pelikula, putol na bahagi ng pelikula, tala, kopya, babasahin, peryodiko, magasin, larawan, lathalain at mapa na makakasapat sa pangangailangan at interes ng mga tumatangkilik dito.' },
    { id: 5, text: '5. Ang aklatan ay nasa isang lugar na karapat-dapat sa pag-aaral, pananaliksik at pagbabasa.' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {libraryQuestions.map((question) => (
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

export default Library;
