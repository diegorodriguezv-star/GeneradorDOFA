import React, { useState, useEffect } from 'react';
import { RefreshCw, BookOpen, Target, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  const questions = [
    {
      id: 1,
      question: "En un análisis DOFA para evaluar una solución tecnológica, ¿qué representa la 'F'?",
      options: [
        "Factores",
        "Fortalezas",
        "Funcionalidades",
        "Frecuencias"
      ],
      correctAnswer: 1,
      evidence: "Realiza un análisis DOFA para evaluar las fortalezas, oportunidades, debilidades y amenazas de la solución.",
      explanation: "En el análisis DOFA, la 'F' corresponde a 'Fortalezas', que son los aspectos positivos internos de la solución que se está evaluando."
    },
    {
      id: 2,
      question: "¿Cuál de los siguientes elementos NO forma parte del análisis DOFA?",
      options: [
        "Oportunidades",
        "Debilidades",
        "Amenazas",
        "Presupuestos"
      ],
      correctAnswer: 3,
      evidence: "Realiza un análisis DOFA para evaluar las fortalezas, oportunidades, debilidades y amenazas de la solución.",
      explanation: "El análisis DOFA se compone únicamente de Fortalezas, Oportunidades, Debilidades y Amenazas. Los presupuestos no son parte de esta metodología."
    },
    {
      id: 3,
      question: "Las 'oportunidades' en un análisis DOFA se refieren a:",
      options: [
        "Factores externos positivos que pueden beneficiar la solución",
        "Características internas positivas del proyecto",
        "Problemas internos que deben mejorarse",
        "Riesgos externos que podrían afectar negativamente"
      ],
      correctAnswer: 0,
      evidence: "Realiza un análisis DOFA para evaluar las fortalezas, oportunidades, debilidades y amenazas de la solución.",
      explanation: "Las oportunidades son factores externos positivos en el entorno que pueden ser aprovechados para beneficiar la solución tecnológica."
    },
    {
      id: 4,
      question: "¿Por qué es importante justificar una propuesta tecnológica con estudios académicos?",
      options: [
        "Para hacer que el proyecto parezca más complicado",
        "Para demostrar que la propuesta está basada en conocimientos científicos y evidencia",
        "Porque es un requisito legal",
        "Para impresionar a los profesores"
      ],
      correctAnswer: 1,
      evidence: "Justifica su propuesta a través de una base investigativa, que incluye tanto estudios académicos como información de actualidad.",
      explanation: "Los estudios académicos proporcionan una base científica y evidencia confiable que respalda la viabilidad y pertinencia de la propuesta tecnológica."
    },
    {
      id: 5,
      question: "En el contexto de una propuesta tecnológica, la 'información de actualidad' se refiere a:",
      options: [
        "Noticias recientes sobre celebridades",
        "Datos y tendencias actuales relacionadas con el problema que se quiere resolver",
        "La fecha de entrega del proyecto",
        "Información sobre el clima actual"
      ],
      correctAnswer: 1,
      evidence: "Justifica su propuesta a través de una base investigativa, que incluye tanto estudios académicos como información de actualidad.",
      explanation: "La información de actualidad incluye datos, estadísticas y tendencias recientes que demuestran la relevancia y necesidad actual de la solución propuesta."
    },
    {
      id: 6,
      question: "¿Qué tipo de factores representan las 'amenazas' en un análisis DOFA?",
      options: [
        "Factores internos positivos",
        "Factores internos negativos",
        "Factores externos positivos",
        "Factores externos negativos"
      ],
      correctAnswer: 3,
      evidence: "Realiza un análisis DOFA para evaluar las fortalezas, oportunidades, debilidades y amenazas de la solución.",
      explanation: "Las amenazas son factores externos negativos que podrían afectar negativamente la implementación o éxito de la solución tecnológica."
    },
    {
      id: 7,
      question: "Al realizar una base investigativa para justificar una propuesta, ¿qué combinación es más efectiva?",
      options: [
        "Solo estudios académicos antiguos",
        "Solo información de actualidad sin respaldo académico",
        "Estudios académicos y información de actualidad combinados",
        "Opiniones personales sin evidencia"
      ],
      correctAnswer: 2,
      evidence: "Justifica su propuesta a través de una base investigativa, que incluye tanto estudios académicos como información de actualidad.",
      explanation: "La combinación de estudios académicos (que aportan fundamentos teóricos) e información de actualidad (que demuestra relevancia) crea una justificación sólida y completa."
    },
    {
      id: 8,
      question: "Las 'debilidades' en un análisis DOFA corresponden a:",
      options: [
        "Aspectos negativos internos de la solución",
        "Problemas externos del mercado",
        "Oportunidades perdidas",
        "Fortalezas ocultas"
      ],
      correctAnswer: 0,
      evidence: "Realiza un análisis DOFA para evaluar las fortalezas, oportunidades, debilidades y amenazas de la solución.",
      explanation: "Las debilidades son aspectos internos negativos o limitaciones de la solución tecnológica que deben ser reconocidos y, en lo posible, mejorados."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    setShowResult(true);
    
    if (isCorrect && !answeredQuestions.has(currentQuestion)) {
      setScore(score + 1);
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Set());
  };

  const getProgressPercentage = () => {
    return ((currentQuestion) / questions.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Generador de Preguntas - Grado 4º</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Evidencias de Aprendizaje: Análisis DOFA y Justificación Investigativa
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
            <span>Puntaje: {score}/{questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-start mb-4">
            <Target className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
            <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
          </div>
          
          {/* Evidence Badge */}
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6 rounded">
            <div className="flex items-center mb-2">
              <HelpCircle className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="font-medium text-indigo-800">Evidencia de Aprendizaje:</span>
            </div>
            <p className="text-indigo-700 text-sm">{questions[currentQuestion].evidence}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? showResult
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedAnswer === index
                      ? showResult
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-red-500 bg-red-500 text-white'
                        : 'border-indigo-500 bg-indigo-500 text-white'
                      : 'border-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Submit Button */}
          {!showResult && (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Verificar Respuesta
            </button>
          )}

          {/* Result Feedback */}
          {showResult && (
            <div className={`mt-6 p-4 rounded-lg ${
              selectedAnswer === questions[currentQuestion].correctAnswer
                ? 'bg-green-100 border border-green-200'
                : 'bg-red-100 border border-red-200'
            }`}>
              <div className="flex items-center mb-2">
                {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 mr-2" />
                )}
                <span className={`font-semibold ${
                  selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'text-green-800'
                    : 'text-red-800'
                }`}>
                  {selectedAnswer === questions[currentQuestion].correctAnswer
                    ? '¡Correcto!'
                    : 'Incorrecto'}
                </span>
              </div>
              <p className="text-gray-700">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleRestart}
            className="flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reiniciar Cuestionario
          </button>
          
          {currentQuestion === questions.length - 1 && showResult && (
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Puntaje Final: {score}/{questions.length}
              </p>
              <p className={`font-medium ${
                score >= questions.length * 0.7
                  ? 'text-green-600'
                  : score >= questions.length * 0.5
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}>
                {score >= questions.length * 0.7
                  ? '¡Excelente trabajo!'
                  : score >= questions.length * 0.5
                  ? 'Buen esfuerzo, sigue practicando'
                  : 'Necesitas repasar más los conceptos'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
