import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [currentDrawing, setCurrentDrawing] = useState(null);
  const [penColor, setPenColor] = useState('black');
  const [eraserMode, setEraserMode] = useState(false);
  const [penSize, setPenSize] = useState(2); // Default pen size
  const [eraserSize, setEraserSize] = useState(10); // Default eraser size
  const canvasRef = useRef(null);

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddOrEditNote = () => {
    if (input.trim()) {
      const timestamp = new Date().toLocaleString();
      if (editingIndex !== null) {
        const updatedNotes = notes.map((note, index) =>
          index === editingIndex ? { ...note, text: input.trim(), drawing: currentDrawing, date: timestamp } : note
        );
        setNotes(updatedNotes);
        setEditingIndex(null);
      } else {
        setNotes([...notes, { text: input.trim(), date: timestamp, drawing: currentDrawing }]);
      }
      resetInput();
    }
  };

  const resetInput = () => {
    setInput('');
    setCurrentDrawing(null);
    setEraserMode(false);
    setPenColor('black');
    setPenSize(2); // Reset pen size
    setEraserSize(10); // Reset eraser size
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const handleEditNote = (index) => {
    setInput(notes[index].text);
    setEditingIndex(index);
    setCurrentDrawing(notes[index].drawing);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = notes[index].drawing;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  const toggleDrawing = () => {
    setDrawing(!drawing);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!drawing) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setCurrentDrawing(null);
    }
  };

  const drawOnCanvas = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = eraserMode ? eraserSize : penSize; // Use the selected size
    ctx.lineCap = 'round';

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (drawing) {
      ctx.strokeStyle = eraserMode ? 'white' : penColor;
      ctx.lineTo(x, y);
      ctx.stroke();
      setCurrentDrawing(canvas.toDataURL());
    }
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setDrawing(true);
  };

  const endDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
    setDrawing(false);
  };

  const handleColorChange = (e) => {
    setPenColor(e.target.value);
    setEraserMode(false);
  };

  const toggleEraser = () => {
    setEraserMode(!eraserMode);
    setPenColor(eraserMode ? 'black' : 'white');
  };

  const handlePenSizeChange = (e) => {
    setPenSize(e.target.value);
  };

  const handleEraserSizeChange = (e) => {
    setEraserSize(e.target.value);
  };

  const handleClearAllNotes = () => {
    setNotes([]);
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCurrentDrawing(null); // Reset current drawing state
  };

  const handleSaveNoteAsImage = (index) => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `note_${index + 1}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleSaveDrawingAsImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Notes</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          placeholder="Type your note here..."
        />
        <button
          onClick={handleAddOrEditNote}
          className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 transition duration-200"
        >
          {editingIndex !== null ? 'Update Note' : 'Add Note'}
        </button>
      </div>

      <ul className="list-disc pl-5 mb-4">
        {notes.map((note, index) => (
          <li key={index} className="flex justify-between items-center mb-2 p-3 bg-white rounded-md shadow-md hover:shadow-lg transition duration-200">
            <span className="text-gray-800">{note.text} <small className="text-gray-500">({note.date})</small></span>
            <div className="flex items-center">
              <button
                onClick={() => handleEditNote(index)}
                className="ml-2 text-yellow-600 hover:underline"
                title="Edit"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDeleteNote(index)}
                className="ml-2 text-red-600 hover:underline"
                title="Delete"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => handleSaveNoteAsImage(index)}
                className="ml-2 text-green-600 hover:underline"
                title="Save Drawing"
              >
                <FaSave />
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      <button
        onClick={handleClearAllNotes}
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
      >
        Clear All Notes
      </button>

      {/* Drawing Canvas Section */}
      <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Drawing Section</h2>
        <div className="flex items-center mb-4">
          <button
            onClick={toggleDrawing}
            className={`flex items-center justify-center px-4 py-2 rounded-lg text-white transition duration-200 ${drawing ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
          >
            {drawing ? 'Stop Drawing' : 'Start Drawing'}
          </button>
          <button
            onClick={() => { setEraserMode(false); setPenColor('black'); }}
            className={`ml-2 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200`}
          >
            Pen
          </button>
          <button
            onClick={toggleEraser}
            className={`ml-2 px-4 py-2 rounded-lg text-white ${eraserMode ? 'bg-blue-400' : 'bg-gray-600'} hover:bg-gray-700 transition duration-200`}
          >
            Eraser
          </button>
          <input
            type="number"
            value={penSize}
            onChange={handlePenSizeChange}
            className="ml-2 w-16 p-1 border border-gray-300 rounded-md"
            title="Pen Size"
            min="1"
            max="10"
          />
          <input
            type="number"
            value={eraserSize}
            onChange={handleEraserSizeChange}
            className="ml-2 w-16 p-1 border border-gray-300 rounded-md"
            title="Eraser Size"
            min="1"
            max="20"
          />
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={300}
          className="border border-gray-300"
          onMouseDown={startDrawing}
          onMouseMove={drawOnCanvas}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
        />
        <button
          onClick={handleClearCanvas}
          className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          Clear Canvas
        </button>
        <button
          onClick={handleSaveDrawingAsImage}
          className="mt-2 ml-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          Save Drawing as Image
        </button>
      </div>
    </div>
  );
};

export default Notes;






