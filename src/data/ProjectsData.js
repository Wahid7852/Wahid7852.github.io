import tictactoe from "../assets/images/portfolio/tictactoe.png";
import chatbot from "../assets/images/portfolio/chatbot.png";
import OCR from "../assets/images/portfolio/OCR.png";
import face_recog from "../assets/images/portfolio/face-recog.png";
import nova from "../assets/images/portfolio/nova.png";

const ProjectsPreviewData = [
  {
    id: "tic-tac-toe", 
    img: tictactoe,
    name: "Tic-Tac-Toe with AI",
    stack: ["< C++/>", "< Minimax Algorithm />"],
    source: "https://github.com/Wahid7852/my_projects/blob/main/C%2B%2B/Games/tic-tac_with_AI.cpp",
    description:
    "Tic-Tac-Toe is a game where two players take turns marking the spaces in a 3×3 grid with X and O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. This project is a C++ implementation of the game with an AI that uses the Minimax algorithm to determine the best move.",
},
{
    id: "chatbot",
    img: chatbot,
    name: "Python Chatbot",
    stack: ["<Python />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/chatbot",
    description:
      "A chatbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent. This project is a Python implementation of a chatbot that can answer basic questions and perform simple tasks.",
  },
  {
    id: "face-recog",
    img: face_recog,
    name: "Face Recognition Based Attendance System",
    stack: ["<Python />", "<OpenCV />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/face-recog",
    description:
    "A face recognition based attendance system that can be used to mark attendance for a group of people. The system uses OpenCV to detect faces and recognize them using a pre-trained model. The attendance is marked in a CSV file.",
  },
  {
    id: "text-from-video",
    img: OCR,
    name: "Text Extraction from Video",
    stack: ["<Python />, <PyQt5 />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/text-from-video", 
    description:
    "A Python application that can extract text from a video and save it in a text file. The application uses PyQt5 for the GUI and OpenCV for video processing.",
  },
  {
    id: "Nova-Kernel",
    img: nova,
    name: "Nova Kernel",
    stack: ["<C Programming/>", "< Linux Kernel />"],
    source: "https://github.com/nova-kernels/kernel_xiaomi_mt6785",
    description:
      "Custom Linux Kernel for the Redmi Note 8 Pro, aiming for perfect blend of performance, battery, and stability",
  },
];

const ProjectsData = [
  {
    id: "tic-tac-toe", 
    img: tictactoe,
    name: "Tic-Tac-Toe with AI",
    stack: ["< C++/>", "< Minimax Algorithm />"],
    source: "https://github.com/Wahid7852/my_projects/blob/main/C%2B%2B/Games/tic-tac_with_AI.cpp",
    description:
    "Tic-Tac-Toe is a game where two players take turns marking the spaces in a 3×3 grid with X and O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. This project is a C++ implementation of the game with an AI that uses the Minimax algorithm to determine the best move.",
},
{
    id: "chatbot",
    img: chatbot,
    name: "Python Chatbot",
    stack: ["<Python />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/chatbot",
    description:
      "A chatbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent. This project is a Python implementation of a chatbot that can answer basic questions and perform simple tasks.",
  },
  {
    id: "face-recog",
    img: face_recog,
    name: "Face Recognition Based Attendance System",
    stack: ["<Python />", "<OpenCV />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/face-recog",
    description:
    "A face recognition based attendance system that can be used to mark attendance for a group of people. The system uses OpenCV to detect faces and recognize them using a pre-trained model. The attendance is marked in a CSV file.",
  },
  {
    id: "text-from-video",
    img: OCR,
    name: "Text Extraction from Video",
    stack: ["<Python />, <PyQt5 />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/text-from-video", 
    description:
    "A Python application that can extract text from a video and save it in a text file. The application uses PyQt5 for the GUI and OpenCV for video processing.",
  },
  {
    id: "Nova-Kernel",
    img: nova,
    name: "Nova Kernel",
    stack: ["<C Programming/>", "< Linux Kernel />"],
    source: "https://github.com/nova-kernels/kernel_xiaomi_mt6785",
    description:
      "Custom Linux Kernel for the Redmi Note 8 Pro, aiming for perfect blend of performance, battery, and stability",
  },
];

export { ProjectsData, ProjectsPreviewData };
