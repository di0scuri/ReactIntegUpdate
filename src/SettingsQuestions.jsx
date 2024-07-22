import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SettingsQuestions.css';
import SaveIcon from './icons/icons8-save-24.png';
import EditIcon from './icons/icons8-edit-24 (2).png';

function SettingsQuestions() {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [offices, setOffices] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [editMode, setEditMode] = useState(null); // Track which question is being edited
  const [editText, setEditText] = useState(''); // Track text for editing
  const [message, setMessage] = useState(''); // Success or error message

  useEffect(() => {
    axios.get('http://localhost:8000/getOffices.php')
      .then(response => {
        if (response.data.error) {
          console.error(response.data.error);
        } else {
          setOffices(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching offices:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedOffice) {
      axios.get(`http://localhost:8000/getQuestions.php?officeID=${selectedOffice.officeID}`)
        .then(response => {
          if (response.data.error) {
            console.error(response.data.error);
            setQuestions([]);
          } else {
            setQuestions(response.data.length ? response.data : Array.from({ length: 5 }, (_, i) => ({ number: i + 1, question: 'Edit to set question' })));
          }
        })
        .catch(error => {
          console.error('Error fetching questions:', error);
          setQuestions(Array.from({ length: 5 }, (_, i) => ({ number: i + 1, question: 'Edit to set question' })));
        });
    } else {
      setQuestions([]);
    }
  }, [selectedOffice]);

  const handleOfficeClick = (office) => {
    setSelectedOffice(office);
    setEditMode(null);
    setMessage('');
  };

  const handleEditClick = (index) => {
    setEditMode(index);
    setEditText(questions[index].question);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditBlur = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = editText;
    setQuestions(updatedQuestions);
    setEditMode(null);
  };

  const handleSaveClick = () => {
    axios.post('http://localhost:8000/saveQuestions.php', {
      officeID: selectedOffice.officeID,
      questions
    })
      .then(response => {
        if (response.data.success) {
          setMessage('Questions saved successfully.');
        } else {
          setMessage('Error saving questions: ' + response.data.error);
        }
      })
      .catch(error => {
        console.error('Error saving questions:', error);
        setMessage('Error saving questions: ' + error.message);
      });
  };

  return (
    <div className="settings-questions-container">
      <div className="nav-container card">
        <h3 className="office-title">Select Office to Edit Question</h3>
        <table className="office-table">
          <tbody>
            {offices.map((office, index) => (
              <tr key={index}>
                <td className={selectedOffice?.officeID === office.officeID ? 'active' : ''} onClick={() => handleOfficeClick(office)}>
                  {office.officename}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="questions-container card">
        <div className="questions-header">
          <h3>{selectedOffice ? selectedOffice.officename : ''}</h3>
          {selectedOffice && (
            <button onClick={handleSaveClick} className="save-button">
              <img src={SaveIcon} alt="Save" />
            </button>
          )}
        </div>
        {message && <p className="message">{message}</p>}
        {selectedOffice && (
          <div className="questions-list">
            {questions.length > 0 ? (
              <ul>
                {questions.map((question, index) => (
                  <li key={index} className="question-item">
                    <span className="question-number">{index + 1}.</span>
                    {editMode === index ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={handleEditChange}
                        onBlur={() => handleEditBlur(index)}
                        onKeyPress={(e) => { if (e.key === 'Enter') handleEditBlur(index); }}
                        autoFocus
                      />
                    ) : (
                      <span className="question-text">{question.question}</span>
                    )}
                    <button className="edit-button" onClick={() => handleEditClick(index)}>
                      <img src={EditIcon} alt="Edit" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No questions available for this office.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsQuestions;
