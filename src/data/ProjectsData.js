import chatbot from "../assets/images/portfolio/chatbot.png";
import face_recog from "../assets/images/portfolio/face-recog.png";
import nova from "../assets/images/portfolio/nova.png";

const ProjectsPreviewData = [
{
    id: "chatbot",
    img: chatbot,
    name: "Python Chatbot",
    stack: ["<Python />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/chatbots/voice_bot",
    description:
    "This project involves creating a Python chatbot that can handle basic queries and tasks, serving as a virtual assistant through text or speech-based online conversations.",
  },
  {
    id: "face-recog",
    img: face_recog,
    name: "Face Recognition Based Attendance System",
    stack: ["<Python />", "<OpenCV />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/face_recog_systems/attendace_system_with_training_images",
    description:
    "This project entails a face recognition attendance system utilizing OpenCV to detect and recognize faces using a pre-trained model. Attendance records are stored in a CSV file for a streamlined group attendance process."
  },
  {
    id: "Nova-Kernel",
    img: nova,
    name: "Nova Kernel",
    stack: ["<C Programming/>", "< Linux Kernel />"],
    source: "https://github.com/nova-kernels/kernel_xiaomi_mt6785",
    description:
    "Developing a tailored Linux Kernel for Redmi Note 8 Pro, aiming to achieve optimal balance between performance, battery life, and stability."
  },
];

const ProjectsData = [
{
    id: "chatbot",
    img: chatbot,
    name: "Python Chatbot",
    stack: ["<Python />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/chatbots/voice_bot",
    description:
    "This project involves creating a Python chatbot that can handle basic queries and tasks, serving as a virtual assistant through text or speech-based online conversations.",
  },
  {
    id: "face-recog",
    img: face_recog,
    name: "Face Recognition Based Attendance System",
    stack: ["<Python />", "<OpenCV />"],
    source: "https://github.com/Wahid7852/my_projects/tree/main/Python/PyProjects/face_recog_systems/attendace_system_with_training_images",
    description:
    "This project entails a face recognition attendance system utilizing OpenCV to detect and recognize faces using a pre-trained model. Attendance records are stored in a CSV file for a streamlined group attendance process."
  },
  {
    id: "Nova-Kernel",
    img: nova,
    name: "Nova Kernel",
    stack: ["<C Programming/>", "< Linux Kernel />"],
    source: "https://github.com/nova-kernels/kernel_xiaomi_mt6785",
    description:
    "Developing a tailored Linux Kernel for Redmi Note 8 Pro, aiming to achieve optimal balance between performance, battery life, and stability."
  },
];

export { ProjectsData, ProjectsPreviewData };
