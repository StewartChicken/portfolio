
// Verbose paragraph structure:
// Four sections:
//  - What is the project and what's the purpose
//  - What was implemented
//  - Challenges
//  - Outcome (what was useful about the project)

// For images:
// 2-4 images per
//  - Final result
//  - Some technical details
//  - Iteration evidence

import { assets } from '@/assets/assets'

export const projectPageData = {
    /*
    trinity:
    {
        title: 'Trinity Research Project',
        description: 'Virtual reality training scenarios to test learning and skill retention in astronauts.',
        description_verbose: `This project focused on [what the system is] with the goal of [what problem it addresses].
                            I designed and implemented [core components], with particular emphasis on [key technical challenge].
                            The project required careful consideration of [constraints: timing, performance, correctness, etc.].
`,
        skills: ['Agile', 'Software Design', 'C#', 'Unity', 'MongoDB', 'Arduino'],
        duration: 'Two Years',
        images: [
            {
                src : '/project_images/trinity/img1.png' ,
                description : 'description1' ,
            },
        ]
    },*/
    qegshare:
    {
        title: 'Quantum-Enhanced GShare',
        description: 'A novel branch predictor combining classical and quantum computing techniques.',
        description_verbose: `In this project, I co-authored a research paper exploring a quantum-inspired approach to branch prediction 
        in modern processor architectures. The work investigates how ideas from quantum algorithms can be applied to speculative execution, 
        with the goal of reducing interference between unrelated branches and improving prediction behavior at the architectural level. The 
        proposed design extends a classical branch predictor by introducing a simulated quantum state model that enables multiple prediction 
        paths to be evaluated simultaneously and reinforced over time. The predictor was implemented and evaluated in the gem5 processor 
        simulator, allowing direct comparison between classical and quantum-enhanced designs under identical conditions. While initial results 
        did not outperform the classical predictor under constrained simulation parameters, the implementation demonstrated functional 
        quantum-inspired behavior and identified promising directions for future architectural exploration.`,
        skills: ['C++', 'Gem5', 'Processor Simulation', 'CPU Architecture'],
        duration: 'One Semester',
        images: [
            {
                src: 'project_images/qegshare/block.png',
                description: `This is the general block diagram for the proposed \'Quantum\' branch predictor. We add a \'Quantum\' table and a 
                            measurement gate into the functionality of the classic GShare branch predictor scheme. `
            },
            {
                src: 'project_images/qegshare/results.png',
                description: `This image shows the results of our simulated predictor when simulating different algorithms. While they did not
                            outperform the classical predictor with our simulated parameters, there is lots of future work to be done in this area.`
            }
        ]
    },
    riscv:
    {
        title: 'RISC-V Processor',
        description: 'Design and implementation of a RISC-V processor using Codal and Codasip.',
        description_verbose: `In this project, I designed, implemented, and tested a five-stage pipelined RISC-V32I processor 
        using the Codal programming language. The processor supported essential RISC-V instruction types, including arithmetic 
        operations (like ADD, SUB, AND, XOR, etc), control flow instructions (JAL, JALR), and memory access commands (LW, LBU, SW). 
        Development of the processor was split into many different stages, each of which built upon the complexity and scalability 
        of the design. The processor itself contains a five stage, cycle accurate, forwarded pipeline with optimized branch prediction 
        and additional error correction instructions. This experience strengthened my understanding of computer architecture/digital 
        design, and it bridged the gap in my understanding between embedded software and hardware. 
`,
        skills: ['C++', 'CPU Design', 'RISC-V', 'Assembly', 'Instruction Set Architecture'],
        duration: 'One Semester',
        images: [
            {
                src: '/project_images/riscv/IF.png',
                description: 'This diagram shows the design for the Instruction Fetch stage of the pipeline during a late stage of the project.'
            },
            {
                src: '/project_images/riscv/ID.png',
                description: 'This diagram shows the design for the Instruction Decode stage of the pipeline during a late stage of the project.'
            },
            {
                src: '/project_images/riscv/EX.png',
                description: 'This diagram shows the design for the Execute stage of the pipeline during a late stage of the project.'
            }
        ]
    },
    labyrinth:
    {
        title: 'Labyrinth Game',
        description: 'An interactive embedded game written on an STM32 microcontroller.',
        description_verbose: `In this project, I designed, implemented, and tested a real-time embedded game system on an STM32 
        microcontroller using an RTOS-based architecture. Development followed an Agile sprint methodology, with functionality implemented 
        and validated incrementally. The system comprised multiple concurrent tasks for input handling, physics simulation, game logic, 
        display rendering, and user feedback, coordinated through RTOS primitives such as mutexes, timers, and event flags. Key features 
        included gyroscope-based motion control, randomized map generation using a hardware RNG, and real-time collision detection. The 
        project emphasized deterministic execution and safe inter-task communication under tight resource constraints. Shared state was
        protected to prevent race conditions, task priorities and update rates were carefully tuned to balance responsiveness and system load, 
        and the collision detection algorithm was optimized to reduce computational overhead and improve real-time performance.`,
        skills: ['C', 'STM32', 'Embedded Systems', 'RTOS', 'Debbugging', 'Unit Testing'],
        duration: 'One Year',
        images: [
            {
                src: 'project_images/labyrinth/diagram.png',
                description: `This diagram shows the task diagram for the game\'s operating system. It includes the peripheral devices
                            as well as inter-task communication like Mutexes and event flags.`
            }
        ]
    },/*
    quiksites:
    {
        title: 'Quikwebsites',
        description: 'A MERN based fullstack pipeline for quickly creating professional websites.',
        description_verbose: `This project focused on [what the system is] with the goal of [what problem it addresses].
                            I designed and implemented [core components], with particular emphasis on [key technical challenge].
                            The project required careful consideration of [constraints: timing, performance, correctness, etc.]`,
        skills: ['JavaScript', 'Agile', 'MERN Stack', 'MongoDB', 'Google Cloud Run'],
        duration: 'One Year',
        images: [
            {
                src: '/project_images/quiksites/img1.png',
                description: 'temp'
            }
        ]
    },*/
    /*
    gnn:
    {
        title: 'Weisfeiler-Lehman GNN',
        description: 'An attempt at approximating the Weisfeiler-Lehman algorithm using graph neural networks.',
        description_verbose: `This project focused on [what the system is] with the goal of [what problem it addresses].
                            I designed and implemented [core components], with particular emphasis on [key technical challenge].
                            The project required careful consideration of [constraints: timing, performance, correctness, etc.]`,
        skills: ['PyTorch', 'Deep Learning', 'Neural Algorithms', 'Graph Theory'],
        duration: 'One Semester',
        images: [
            {
                src: '/project_images/gnn/img1.png',
                description: 'temp'
            }
        ]
    },
    */
    /*
    acrylic:
    {   
        title: 'Acrylic Desk Lamps',
        description: 'Custom, LED desk lamps which portray your favorite musical album covers.',
        description_verbose: `This project focused on [what the system is] with the goal of [what problem it addresses].
                            I designed and implemented [core components], with particular emphasis on [key technical challenge].
                            The project required careful consideration of [constraints: timing, performance, correctness, etc.]`,
        skills: ['Image Processing', 'Algorithms', 'Manufacturing', 'Circuits', 'Arduino'],
        duration: 'One Year',
        images: [
            {
                src: '/project_images/acrylic/img1.png',
                description: 'temp'
            }
        ]
    },
    */
    /*
    stocks:
    {
        title: 'Deep Learning for Finance',
        description: 'An exploration in the use of Deep Learning for analyzing stock market data.',
        description_verbose: `verbose`,
        skills: ['TensorFlow', 'Deep Learning', 'Python', 'Data Processing', 'Statistics'],
        duration: 'One Semester',
        images: [
            {
                src: '/project_images/stocks/img1.png',
                description: 'temp'
            }
        ]
    },*/
    car:
    {
        title: 'Robot Car',
        description: 'A robot car driven by an analog control loop, Arduino and Bluetooth Low Energy.',
        description_verbose: `In this project, I implemented and analyzed a closed-loop robotic vehicle integrating analog motor drive 
        circuitry, feedback control, and embedded control logic. Development progressed from motor characterization and control analysis 
        to a fully integrated system capable of repeatable linear and rotational motion. I implemented a bidirectional H-bridge motor driver 
        and closed-loop speed control system using encoder feedback and analog signal conditioning. Circuit behavior was analyzed and validated 
        through SPICE simulation and experimental testing with oscilloscopes and multimeters, with attention to stability, noise, and real-world 
        component behavior. The final system incorporated an Arduino-based controller to execute motion sequences using encoder interrupts 
        and PWM-based speed control. This project reinforced my understanding of analog feedback systems, motor modeling, and the interaction 
        between continuous-time hardware and discrete embedded control.`,
        skills: ['Circuit Design', 'Circuit Simulation', 'Spice', 'Embedded Firmware'],
        duration: 'One Semester',
        images: [
            {
                src: 'project_images/car/loop.JPG',
                description: `This schematic shows one iteration of the layout for the closed loop of the robot. It includes a MOSFET based direction controller, a 
                            motor driver, a speed sensor, and a compensator which ensures our motor is provided enough power to meet the desired speed.`
            }
        ]
    },
}