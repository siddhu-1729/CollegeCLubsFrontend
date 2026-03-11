import { Component } from '@angular/core';

type LessonItem = {
  title: string;
  description: string;
  example: string;
};

type ModuleItem = {
  title: string;
  duration: string;
  overview: string;
  lessons: LessonItem[];
};

type CourseCard = {
  id: string;
  branch: string;
  accent: string;
  icon: string;
  level: string;
  courseTitle: string;
  provider: string;
  source: string;
  modules: ModuleItem[];
};

type ProgressState = Record<string, boolean[]>;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'SRKR BTech Course Studio';
  protected readonly storageKey = 'study-progress-v2';

  protected readonly highlights = [
    { label: 'Branches covered', value: '10' },
    { label: 'In-site modules', value: '30' },
    { label: 'Progress tracking', value: 'Saved locally' }
  ];

  protected readonly starterTracks: CourseCard[] = [
    {
      id: 'cse',
      branch: 'Computer Science Engineering',
      accent: '#0f766e',
      icon: 'CSE',
      level: '1st year friendly',
      courseTitle: 'Programming Foundations in C',
      provider: 'Adapted from NPTEL Problem Solving Through Programming in C',
      source: 'NPTEL Problem Solving Through Programming in C',
      modules: [
        {
          title: 'Module 1: Logic and Program Flow',
          duration: 'Week 1',
          overview: 'Start with algorithmic thinking before syntax. Students learn how to break a problem into steps, write flowcharts, and trace simple programs.',
          lessons: [
            { title: 'What an algorithm does', description: 'An algorithm is a finite set of steps used to solve a problem in a repeatable way.', example: 'To find the largest of three numbers, compare the first two, keep the larger one, then compare it with the third.' },
            { title: 'Flowchart symbols', description: 'Flowcharts use fixed shapes to represent start, input, process, decision, and output.', example: 'A diamond is used for a check like marks >= 40 and the answer branches to pass or fail.' },
            { title: 'Input-output tracing', description: 'Tracing means following the values of variables step by step as the program runs.', example: 'If a = 2 and b = 3, then sum = a + b gives sum = 5.' },
            { title: 'Dry runs with sample problems', description: 'A dry run is a manual simulation of program logic before actual coding.', example: 'For a loop that prints 1 to 3, track i = 1, then 2, then 3 before the loop stops.' }
          ]
        },
        {
          title: 'Module 2: C Basics and Decisions',
          duration: 'Week 2',
          overview: 'Introduces variables, operators, conditional statements, and loops. The focus is on writing short working programs instead of memorizing theory.',
          lessons: [
            { title: 'Variables and data types', description: 'Variables store values and data types define what kind of values can be stored.', example: 'int age = 18 stores a whole number, while float cgpa = 8.4 stores a decimal.' },
            { title: 'Arithmetic and logical operators', description: 'Operators help perform calculations and comparisons inside expressions.', example: 'total = price * qty multiplies values, and age >= 18 checks eligibility.' },
            { title: 'if-else and switch', description: 'Decision statements choose different paths based on conditions.', example: 'If attendance is below 75, show shortage warning; otherwise allow exam registration.' },
            { title: 'for and while loops', description: 'Loops repeat a block of code until a condition changes.', example: 'A for loop can print the first 5 roll numbers one after another.' }
          ]
        },
        {
          title: 'Module 3: Arrays, Functions, and Problem Solving',
          duration: 'Week 3',
          overview: 'Moves into arrays, functions, and modular programming so students can solve slightly larger engineering-style problems with reusable logic.',
          lessons: [
            { title: 'Single-dimensional arrays', description: 'An array stores multiple values of the same type under one name.', example: 'marks[5] can store marks of 5 subjects in one structure.' },
            { title: 'Function design', description: 'Functions break a large program into smaller reusable tasks.', example: 'A function add(a, b) can return the sum without rewriting the logic again.' },
            { title: 'Searching basics', description: 'Searching means finding a target value inside a list of values.', example: 'Check a class register list one by one until roll number 27 is found.' },
            { title: 'Simple sorting practice', description: 'Sorting arranges values in ascending or descending order.', example: 'Marks 55, 72, 61 become 55, 61, 72 after sorting.' }
          ]
        }
      ]
    },
    {
      id: 'it',
      branch: 'Information Technology',
      accent: '#2563eb',
      icon: 'IT',
      level: '2nd year friendly',
      courseTitle: 'Cloud Computing Essentials',
      provider: 'Adapted from NPTEL Cloud Computing',
      source: 'NPTEL Cloud Computing',
      modules: [
        {
          title: 'Module 1: Cloud Concepts',
          duration: 'Week 1',
          overview: 'Explains why cloud platforms exist, what shared resources mean, and how computing becomes available as an on-demand service.',
          lessons: [
            { title: 'What cloud computing means', description: 'Cloud computing provides servers, storage, and software over the internet when needed.', example: 'Instead of buying a local server, a startup can rent one online for one month.' },
            { title: 'Public, private, and hybrid cloud', description: 'These models differ in who owns the infrastructure and how it is shared.', example: 'A college ERP on a company-managed server is public cloud; an internal exam server can be private cloud.' },
            { title: 'Elasticity and scalability', description: 'Elasticity adds or removes resources quickly, while scalability handles growth efficiently.', example: 'During admissions week, the portal can temporarily add more server capacity.' },
            { title: 'Real-world cloud examples', description: 'Most modern apps rely on cloud services for hosting, storage, and user authentication.', example: 'A student notes app may use cloud storage so the same notes appear on phone and laptop.' }
          ]
        },
        {
          title: 'Module 2: Service Models and Virtualization',
          duration: 'Week 2',
          overview: 'Introduces IaaS, PaaS, SaaS, and the virtualization layer that helps providers share hardware efficiently across many users.',
          lessons: [
            { title: 'IaaS, PaaS, SaaS', description: 'These are cloud service layers that give infrastructure, development platforms, or ready-to-use software.', example: 'Google Docs is SaaS, while a rented virtual machine is IaaS.' },
            { title: 'Virtual machines', description: 'A VM behaves like a full computer running inside another physical machine.', example: 'One physical server can host separate VMs for web, database, and testing.' },
            { title: 'Containers at a basic level', description: 'Containers package an app with its dependencies in a lightweight unit.', example: 'A web app can run the same inside a developer laptop and in production if packed in a container.' },
            { title: 'Resource pooling', description: 'Cloud providers combine hardware resources and allocate them to many users safely.', example: 'Multiple student projects can share one cloud cluster without directly affecting each other.' }
          ]
        },
        {
          title: 'Module 3: Security and Operations',
          duration: 'Week 3',
          overview: 'Covers the operational side of cloud systems including security concerns, service monitoring, and reliability expectations.',
          lessons: [
            { title: 'Authentication basics', description: 'Authentication checks whether a user really is who they claim to be.', example: 'A login page using password and OTP verifies student identity before access.' },
            { title: 'Data security risks', description: 'Cloud data must be protected from theft, leaks, and unauthorized access.', example: 'Exam records stored without access control can be exposed to the wrong user.' },
            { title: 'Availability and backup', description: 'Systems should remain accessible and also support recovery if data is lost.', example: 'Daily database backup helps restore attendance records after a server crash.' },
            { title: 'Monitoring service health', description: 'Monitoring checks if servers, apps, and APIs are running correctly.', example: 'If response time suddenly jumps, an alert can notify the admin team.' }
          ]
        }
      ]
    },
    {
      id: 'aids',
      branch: 'AI & Data Science',
      accent: '#7c3aed',
      icon: 'AI',
      level: '2nd year friendly',
      courseTitle: 'Data Science Starter Path',
      provider: 'Adapted from NPTEL Data Science for Engineers',
      source: 'NPTEL Data Science for Engineers',
      modules: [
        {
          title: 'Module 1: Data Thinking',
          duration: 'Week 1',
          overview: 'Builds intuition for what data science solves, how data is collected, and how engineering problems turn into datasets.',
          lessons: [
            { title: 'Types of data', description: 'Data can be numerical, categorical, text-based, visual, or time-based depending on the problem.', example: 'Student marks are numerical, while branch names are categorical.' },
            { title: 'Problem framing', description: 'Problem framing converts a vague need into a measurable data question.', example: 'Instead of asking why students fail, frame it as whether attendance predicts failure risk.' },
            { title: 'Features and targets', description: 'Features are input variables and the target is what we want to predict or explain.', example: 'Attendance and internal marks can be features; final result can be the target.' },
            { title: 'Data ethics basics', description: 'Ethics ensures data is used fairly, safely, and with proper permission.', example: 'A student-health dataset should not be shared openly without consent.' }
          ]
        },
        {
          title: 'Module 2: Cleaning and Exploring Data',
          duration: 'Week 2',
          overview: 'Students work through missing values, simple statistics, and visual inspection before any model-building begins.',
          lessons: [
            { title: 'Mean, median, spread', description: 'These basic statistics summarize central value and variation in data.', example: 'If marks are 40, 42, and 98, the median gives a more stable center than the mean.' },
            { title: 'Handling missing data', description: 'Missing values must be removed, filled, or handled carefully before analysis.', example: 'If one student forgot to submit family income, it can be marked unknown or replaced with a sensible estimate.' },
            { title: 'Tables and plots', description: 'Plots help students quickly identify trends, outliers, and patterns.', example: 'A bar chart can show branch-wise placement count more clearly than raw numbers.' },
            { title: 'Finding patterns', description: 'Pattern finding looks for useful relationships in the dataset.', example: 'Higher lab attendance may appear alongside better practical marks.' }
          ]
        },
        {
          title: 'Module 3: Intro Predictions',
          duration: 'Week 3',
          overview: 'Introduces the first step toward predictive systems using simple model ideas and result interpretation instead of heavy mathematics.',
          lessons: [
            { title: 'Training vs testing', description: 'Training data teaches a model; testing data checks if the model works on unseen cases.', example: 'Use past semesters to train and this semester data to test.' },
            { title: 'Regression intuition', description: 'Regression predicts a continuous value like marks, demand, or temperature.', example: 'Predicting semester GPA from internal performance is a regression task.' },
            { title: 'Classification intuition', description: 'Classification assigns cases to fixed groups.', example: 'Labeling emails as spam or not spam is a classification problem.' },
            { title: 'Interpreting accuracy', description: 'Accuracy shows how often a model predicts correctly, but it is not the only quality measure.', example: 'A 90 percent accurate model may still fail if it misses most at-risk students.' }
          ]
        }
      ]
    },
    {
      id: 'ece',
      branch: 'Electronics & Communication Engineering',
      accent: '#dc2626',
      icon: 'ECE',
      level: '1st year friendly',
      courseTitle: 'Digital Electronics Fundamentals',
      provider: 'Adapted from NPTEL Digital Electronic Circuits',
      source: 'NPTEL Digital Electronic Circuits',
      modules: [
        {
          title: 'Module 1: Binary Signals and Logic',
          duration: 'Week 1',
          overview: 'Introduces the binary viewpoint used in digital systems and connects it to simple logic operations used in gates and circuits.',
          lessons: [
            { title: 'Binary numbers', description: 'Binary uses only 0 and 1 to represent data inside digital systems.', example: 'Decimal 5 becomes binary 101.' },
            { title: 'AND, OR, NOT gates', description: 'These are the basic operations used to build digital circuits.', example: 'An AND gate outputs 1 only when both inputs are 1.' },
            { title: 'Truth tables', description: 'A truth table lists outputs for every possible input combination.', example: 'For a NOT gate, input 0 gives output 1 and input 1 gives output 0.' },
            { title: 'Signal representation', description: 'Digital signals are represented as discrete high and low voltage levels.', example: 'A logic high may represent binary 1 and a logic low may represent binary 0.' }
          ]
        },
        {
          title: 'Module 2: Boolean Simplification',
          duration: 'Week 2',
          overview: 'Teaches the algebra behind logic design so students can reduce circuit complexity before implementation.',
          lessons: [
            { title: 'Boolean identities', description: 'Boolean identities help reduce expressions without changing the output.', example: 'A + 0 = A and A . 1 = A are basic simplification rules.' },
            { title: 'Minterms and maxterms', description: 'These are standard forms used to write Boolean functions systematically.', example: 'A minterm becomes 1 for one exact input combination only.' },
            { title: 'K-map basics', description: 'Karnaugh maps visually group terms to simplify digital expressions.', example: 'Four adjacent 1s in a K-map can be grouped into one simpler term.' },
            { title: 'Simplifying logic expressions', description: 'Simplification reduces the number of gates needed in hardware.', example: 'AB + AB prime simplifies to A.' }
          ]
        },
        {
          title: 'Module 3: Combinational Building Blocks',
          duration: 'Week 3',
          overview: 'Uses small digital systems such as adders, multiplexers, and decoders to show how basic gates become useful hardware blocks.',
          lessons: [
            { title: 'Half and full adders', description: 'Adders perform binary addition in digital systems.', example: 'Adding 1 and 1 in a half adder gives sum 0 and carry 1.' },
            { title: 'Multiplexers', description: 'A multiplexer selects one input from many based on control lines.', example: 'A 4-to-1 MUX chooses one of four signals using two select bits.' },
            { title: 'Decoders', description: 'A decoder activates one output line corresponding to the binary input.', example: 'A 2-to-4 decoder turns on only one of four outputs at a time.' },
            { title: 'Basic combinational design', description: 'Combinational circuits depend only on present input values.', example: 'A voting circuit can output 1 if at least two of three inputs are 1.' }
          ]
        }
      ]
    },
    {
      id: 'eee',
      branch: 'Electrical & Electronics Engineering',
      accent: '#d97706',
      icon: 'EEE',
      level: '1st year friendly',
      courseTitle: 'Basic Electrical Circuits',
      provider: 'Adapted from NPTEL Basic Electrical Circuits',
      source: 'NPTEL Basic Electrical Circuits',
      modules: [
        {
          title: 'Module 1: Current, Voltage, and Elements',
          duration: 'Week 1',
          overview: 'Covers the language of electrical engineering first: current, voltage, resistance, and the basic passive elements.',
          lessons: [
            { title: 'Current and voltage meaning', description: 'Current is the flow of charge, while voltage is the potential difference that drives it.', example: 'A battery creates voltage, and that voltage pushes current through a bulb.' },
            { title: 'Resistance', description: 'Resistance opposes current flow in a circuit.', example: 'A resistor limits current so an LED does not burn out.' },
            { title: 'Capacitance and inductance', description: 'Capacitors store energy in electric fields and inductors store energy in magnetic fields.', example: 'A capacitor in a filter circuit can smooth output variations.' },
            { title: 'Power and energy', description: 'Power shows the rate of energy use; energy is the total work done over time.', example: 'A 100 W bulb uses more power than a 9 W LED bulb.' }
          ]
        },
        {
          title: 'Module 2: Circuit Laws',
          duration: 'Week 2',
          overview: 'Moves into Kirchhoff laws and equivalent networks so students can solve small circuits systematically.',
          lessons: [
            { title: 'Ohm law review', description: 'Ohm law relates voltage, current, and resistance in simple circuits.', example: 'If V = 10 V and R = 5 ohms, then I = 2 A.' },
            { title: 'KCL', description: 'Kirchhoff Current Law says current entering a node equals current leaving it.', example: 'If 5 A enters a node and 2 A leaves one branch, the other branch must carry 3 A.' },
            { title: 'KVL', description: 'Kirchhoff Voltage Law says the total voltage around a closed loop is zero.', example: 'In a loop with a 12 V source and two drops of 7 V and 5 V, the sum balances.' },
            { title: 'Series-parallel reduction', description: 'Complex resistor networks can be simplified by combining series and parallel elements.', example: 'Two 2-ohm resistors in series become one 4-ohm resistor.' }
          ]
        },
        {
          title: 'Module 3: Analysis Methods',
          duration: 'Week 3',
          overview: 'Adds common circuit-analysis tools that are repeatedly used in electrical machines, control, and electronics subjects later on.',
          lessons: [
            { title: 'Node method', description: 'Node analysis solves circuits using voltages at important junction points.', example: 'Instead of finding every branch current first, solve unknown node voltages directly.' },
            { title: 'Mesh method', description: 'Mesh analysis uses loop currents to solve planar circuits efficiently.', example: 'A two-loop circuit can be solved with two loop equations.' },
            { title: 'Thevenin and Norton ideas', description: 'These theorems replace a complex network with an equivalent simple source-resistor model.', example: 'A large network can be seen as one voltage source and one resistor at the load terminals.' },
            { title: 'Source transformation', description: 'A voltage source with series resistance can be converted to an equivalent current source and vice versa.', example: '12 V with 6 ohms becomes 2 A with 6 ohms in parallel.' }
          ]
        }
      ]
    },
    {
      id: 'me',
      branch: 'Mechanical Engineering',
      accent: '#0891b2',
      icon: 'ME',
      level: '1st year friendly',
      courseTitle: 'Engineering Mechanics',
      provider: 'Adapted from NPTEL Engineering Mechanics',
      source: 'NPTEL Engineering Mechanics',
      modules: [
        {
          title: 'Module 1: Forces and Equilibrium',
          duration: 'Week 1',
          overview: 'Begins with forces, free-body diagrams, and equilibrium, which form the base for the rest of mechanical problem solving.',
          lessons: [
            { title: 'Scalars and vectors', description: 'Scalars have magnitude only, while vectors have magnitude and direction.', example: 'Mass is a scalar, but force is a vector.' },
            { title: 'Resultant force', description: 'The resultant is the single force equivalent to several forces acting together.', example: 'Two perpendicular forces of 3 N and 4 N combine to give a 5 N resultant.' },
            { title: 'Free-body diagrams', description: 'A free-body diagram isolates one body and shows all forces acting on it.', example: 'A block on a rough floor has weight, normal reaction, friction, and an applied pull.' },
            { title: 'Equilibrium conditions', description: 'A body in equilibrium has zero net force and zero net moment.', example: 'A beam at rest on supports uses sum of forces and moments equal to zero.' }
          ]
        },
        {
          title: 'Module 2: Structures and Friction',
          duration: 'Week 2',
          overview: 'Shows how mechanics is applied to trusses, beams, ladders, and contact surfaces with friction.',
          lessons: [
            { title: 'Truss basics', description: 'A truss is a structure of connected members carrying load mainly by tension or compression.', example: 'Bridge trusses distribute vehicle loads through triangular members.' },
            { title: 'Beam reactions', description: 'Support reactions balance the loads applied on a beam.', example: 'A simply supported beam with a central load shares reaction between both supports.' },
            { title: 'Centroid idea', description: 'The centroid is the geometric center of an area or shape.', example: 'A rectangle centroid lies exactly at its center.' },
            { title: 'Friction problems', description: 'Friction resists motion between contacting surfaces.', example: 'A crate stays at rest until the applied push exceeds static friction.' }
          ]
        },
        {
          title: 'Module 3: Motion Basics',
          duration: 'Week 3',
          overview: 'Introduces the first steps in dynamics so students can connect force-based analysis to moving systems.',
          lessons: [
            { title: 'Displacement and velocity', description: 'Displacement measures position change, while velocity measures how fast position changes.', example: 'If a bike covers 20 m in 4 s, average velocity is 5 m/s.' },
            { title: 'Acceleration', description: 'Acceleration is the rate of change of velocity.', example: 'If speed increases from 0 to 10 m/s in 2 s, acceleration is 5 m/s squared.' },
            { title: 'Newton second law', description: 'Force equals mass times acceleration for a body in motion.', example: 'A 2 kg object accelerating at 3 m/s squared needs 6 N force.' },
            { title: 'Simple work-energy idea', description: 'Work done on a body changes its energy.', example: 'Pushing a trolley increases its kinetic energy as it speeds up.' }
          ]
        }
      ]
    },
    {
      id: 'civil',
      branch: 'Civil Engineering',
      accent: '#65a30d',
      icon: 'CE',
      level: '1st year friendly',
      courseTitle: 'Civil Engineering Orientation',
      provider: 'Adapted from NPTEL Introduction to Civil Engineering Profession',
      source: 'NPTEL Introduction to Civil Engineering Profession',
      modules: [
        {
          title: 'Module 1: What Civil Engineers Build',
          duration: 'Week 1',
          overview: 'Introduces the civil engineering profession through structures, transportation, water systems, and public infrastructure.',
          lessons: [
            { title: 'Buildings and bridges', description: 'Structural systems are designed to safely carry loads and remain stable over time.', example: 'A bridge deck must support vehicles, wind, and its own weight.' },
            { title: 'Roads and transport', description: 'Transportation engineering plans roads, traffic, and mobility systems.', example: 'A junction redesign can reduce congestion during peak college hours.' },
            { title: 'Water infrastructure', description: 'Water systems move, store, and treat water for communities.', example: 'A town needs pipelines, overhead tanks, and drainage systems.' },
            { title: 'Public works overview', description: 'Civil engineering supports daily life through built public infrastructure.', example: 'Bus stations, drainage lines, and retaining walls all fall under public works.' }
          ]
        },
        {
          title: 'Module 2: Core Civil Disciplines',
          duration: 'Week 2',
          overview: 'Explains how structural, geotechnical, environmental, surveying, and construction functions fit together in projects.',
          lessons: [
            { title: 'Structural engineering', description: 'Structural engineering deals with the safe design of load-carrying systems.', example: 'A multi-storey building frame must resist gravity and earthquake loads.' },
            { title: 'Geotechnical basics', description: 'Geotechnical engineering studies soil behavior and foundations.', example: 'Soft soil may require a deeper foundation than hard rock.' },
            { title: 'Environmental engineering', description: 'This area manages water quality, waste treatment, and pollution control.', example: 'A sewage treatment plant cleans wastewater before discharge.' },
            { title: 'Surveying and construction', description: 'Surveying measures land accurately, while construction turns plans into real structures.', example: 'Before building begins, the site layout is marked using survey points.' }
          ]
        },
        {
          title: 'Module 3: Career and Site Skills',
          duration: 'Week 3',
          overview: 'Connects classroom topics to field practice, teamwork, planning, safety, and project execution.',
          lessons: [
            { title: 'Reading drawings', description: 'Drawings communicate dimensions, layout, and structural details to site teams.', example: 'A floor plan shows room positions, while a structural drawing shows beam sizes.' },
            { title: 'Site coordination', description: 'Construction projects require coordination between engineers, contractors, and workers.', example: 'Concrete work cannot begin until reinforcement and formwork are checked.' },
            { title: 'Safety awareness', description: 'Civil sites involve heavy equipment and high-risk tasks, so safety is critical.', example: 'Workers at height must use helmets, harnesses, and safety nets.' },
            { title: 'Career pathways', description: 'Civil students can move into design, site execution, surveying, planning, or public service.', example: 'One graduate may join a site team while another prepares for government engineering jobs.' }
          ]
        }
      ]
    },
    {
      id: 'chemical',
      branch: 'Chemical Engineering',
      accent: '#be123c',
      icon: 'CHE',
      level: '2nd year friendly',
      courseTitle: 'Material and Energy Balance Basics',
      provider: 'Adapted from NPTEL Material & Energy Balance Computations',
      source: 'NPTEL Material & Energy Balance Computations',
      modules: [
        {
          title: 'Module 1: Process Quantities',
          duration: 'Week 1',
          overview: 'Introduces process streams, units, composition, and the idea of writing balance equations around a system.',
          lessons: [
            { title: 'Units and conversions', description: 'Chemical calculations often need correct unit conversion before solving any process problem.', example: '500 g is converted to 0.5 kg before using mass balance equations.' },
            { title: 'Mass fraction and mole fraction', description: 'Fractions describe how much of each component is present in a mixture.', example: 'If 2 kg salt is mixed in 10 kg solution, mass fraction of salt is 0.2.' },
            { title: 'Process streams', description: 'A stream is any material entering or leaving a process unit.', example: 'Milk entering a dryer is one stream and milk powder leaving is another.' },
            { title: 'Drawing process blocks', description: 'Process block diagrams help visualize equipment and material movement clearly.', example: 'A mixer followed by a heater can be represented with two connected blocks.' }
          ]
        },
        {
          title: 'Module 2: Material Balances',
          duration: 'Week 2',
          overview: 'Students solve non-reactive and simple reactive balance problems that appear repeatedly in process engineering.',
          lessons: [
            { title: 'Overall balances', description: 'Overall balance tracks total mass entering and leaving a process.', example: 'If 100 kg enters and 10 kg remains inside, 90 kg must leave.' },
            { title: 'Component balances', description: 'Component balances track each substance separately inside a mixture.', example: 'In a sugar solution, water and sugar are balanced independently.' },
            { title: 'Recycle and bypass', description: 'Recycle returns part of the output back into the system and bypass skips a unit.', example: 'Unreacted gas may be sent back to the reactor as recycle.' },
            { title: 'Simple reaction systems', description: 'Reactive balances account for material consumed or produced by reactions.', example: 'Hydrogen and oxygen combine to form water, changing component amounts.' }
          ]
        },
        {
          title: 'Module 3: Energy Balances',
          duration: 'Week 3',
          overview: 'Adds heat effects and energy accounting so students understand how material and thermal changes interact in processes.',
          lessons: [
            { title: 'Sensible heat', description: 'Sensible heat changes temperature without changing phase.', example: 'Heating water from 25 C to 60 C adds sensible heat.' },
            { title: 'Latent heat', description: 'Latent heat changes phase without changing temperature.', example: 'Boiling water at 100 C requires latent heat to become steam.' },
            { title: 'Energy in process streams', description: 'Streams carry energy in the form of temperature, phase, and motion.', example: 'Hot vapor entering a condenser brings thermal energy into the unit.' },
            { title: 'Balance practice problems', description: 'Energy balance problems connect heat input, output, and accumulation.', example: 'A heater must supply enough energy to raise feed temperature to the target level.' }
          ]
        }
      ]
    },
    {
      id: 'biotech',
      branch: 'Biotechnology',
      accent: '#15803d',
      icon: 'BT',
      level: '2nd year friendly',
      courseTitle: 'Bioprocess Material and Energy Balances',
      provider: 'Adapted from NPTEL Material and Energy Balances',
      source: 'NPTEL Material and Energy Balances',
      modules: [
        {
          title: 'Module 1: Bioprocess Quantities',
          duration: 'Week 1',
          overview: 'Covers the units, material descriptions, and stream representation used in fermentation and bioprocess systems.',
          lessons: [
            { title: 'Units for bioprocess work', description: 'Bioprocess calculations use mass, volume, concentration, and rate units regularly.', example: 'Cell concentration may be written as grams per liter.' },
            { title: 'Cell and substrate streams', description: 'Bioprocess streams carry cells, nutrients, products, and by-products.', example: 'A fermenter feed stream may contain glucose, water, and nutrients.' },
            { title: 'Yield language', description: 'Yield shows how efficiently substrate is converted into product or biomass.', example: 'If 10 g glucose produces 5 g biomass, yield is 0.5 g per g.' },
            { title: 'Process diagrams', description: 'Bioprocess diagrams show units like sterilizers, bioreactors, and separators in order.', example: 'Sterilization may happen before the sterile feed enters the bioreactor.' }
          ]
        },
        {
          title: 'Module 2: Material Movement in Bioprocesses',
          duration: 'Week 2',
          overview: 'Shows how balances are written around mixers, separators, reactors, and recycle systems used in biotech plants.',
          lessons: [
            { title: 'Mixer and separator balances', description: 'Balances describe how components combine or split across unit operations.', example: 'Two nutrient feeds entering a mixer produce one combined outlet stream.' },
            { title: 'Bioreactor feed ideas', description: 'Bioreactor performance depends on the right balance of feed, oxygen, and growth conditions.', example: 'Too little glucose feed may limit cell growth rate.' },
            { title: 'Recycle loops', description: 'Recycle improves efficiency by sending useful material back into the process.', example: 'Part of the broth may be recycled after cell separation.' },
            { title: 'Simple yield calculations', description: 'Yield calculations compare product formed with substrate consumed.', example: 'If 8 g substrate gives 2 g enzyme, product yield is 0.25 g per g.' }
          ]
        },
        {
          title: 'Module 3: Energy View of Biological Systems',
          duration: 'Week 3',
          overview: 'Introduces temperature effects, heating-cooling needs, and the energy bookkeeping needed in biological production units.',
          lessons: [
            { title: 'Heating and cooling loads', description: 'Bioprocess systems often need careful temperature control for cell survival.', example: 'A fermenter may need cooling because microbial growth generates heat.' },
            { title: 'Energy terms', description: 'Energy enters and leaves through feed streams, heating jackets, and work interactions.', example: 'Steam supplied to a vessel adds thermal energy from outside.' },
            { title: 'Batch process intuition', description: 'In batch systems, material and energy change over time inside a closed vessel.', example: 'A batch fermenter is filled, run for some time, and then emptied.' },
            { title: 'Integrated balance exercises', description: 'Combined problems help students link mass and energy behavior in one process.', example: 'A reactor problem may ask for both final concentration and heating requirement.' }
          ]
        }
      ]
    },
    {
      id: 'bme',
      branch: 'Biomedical Engineering',
      accent: '#9333ea',
      icon: 'BME',
      level: '1st year friendly',
      courseTitle: 'Biomechanics Basics',
      provider: 'Adapted from NPTEL Biomechanics',
      source: 'NPTEL Biomechanics',
      modules: [
        {
          title: 'Module 1: Mechanics in the Human Body',
          duration: 'Week 1',
          overview: 'Applies basic mechanics ideas to body posture, movement, and load transfer in tissues and joints.',
          lessons: [
            { title: 'Force in body systems', description: 'Bones, muscles, and joints experience forces during everyday motion.', example: 'Lifting a backpack creates force on the shoulder and spine.' },
            { title: 'Moments in posture', description: 'A moment is the turning effect caused by a force acting at a distance.', example: 'Holding a book with an outstretched arm creates a larger moment at the elbow.' },
            { title: 'Center of mass idea', description: 'The center of mass is the point where body mass can be considered concentrated.', example: 'Standing balance improves when the center of mass stays above the feet.' },
            { title: 'Body balance examples', description: 'Balance depends on support base, posture, and force distribution.', example: 'A person bends forward while carrying weight to keep overall balance.' }
          ]
        },
        {
          title: 'Module 2: Joints and Motion',
          duration: 'Week 2',
          overview: 'Introduces gait, joint motion, and the mechanical role of muscles in producing and controlling movement.',
          lessons: [
            { title: 'Joint types', description: 'Different joints allow different ranges and styles of movement.', example: 'The knee mainly acts like a hinge, while the shoulder has wider movement.' },
            { title: 'Range of motion', description: 'Range of motion describes how far a joint can move safely.', example: 'Physiotherapy often measures knee flexion angle after injury.' },
            { title: 'Gait phases', description: 'Gait analysis studies the repeated phases of walking.', example: 'Heel strike and toe-off are two common gait events.' },
            { title: 'Muscle action basics', description: 'Muscles generate force to move bones around joints.', example: 'The biceps contracts to bend the elbow.' }
          ]
        },
        {
          title: 'Module 3: Tissue and Material Behavior',
          duration: 'Week 3',
          overview: 'Connects stress-strain concepts with biological tissues and biomaterials used in implants and rehabilitation systems.',
          lessons: [
            { title: 'Stress and strain', description: 'Stress is force per area and strain is the resulting deformation.', example: 'A tendon stretches slightly when pulled, creating strain.' },
            { title: 'Bone and soft tissue response', description: 'Different tissues respond differently to loading.', example: 'Bone is stiffer than muscle, so it deforms less for the same load.' },
            { title: 'Viscoelastic idea', description: 'Viscoelastic materials show both elastic and time-dependent behavior.', example: 'Soft tissue slowly changes shape when a constant load is applied.' },
            { title: 'Intro biomaterials', description: 'Biomaterials are selected to work safely inside or with the human body.', example: 'Titanium is often used in implants because it is strong and biocompatible.' }
          ]
        }
      ]
    }
  ];

  protected activeCourseId = this.starterTracks[0].id;
  protected progressState: ProgressState = this.createInitialProgress();
  protected openedCourseId: string | null = null;

  constructor() {
    this.loadProgress();
  }

  protected selectCourse(courseId: string): void {
    this.activeCourseId = courseId;
    this.openedCourseId = courseId;
  }

  protected isActive(courseId: string): boolean {
    return this.activeCourseId === courseId;
  }

  protected getOpenedCourse(): CourseCard | undefined {
    return this.starterTracks.find((course) => course.id === this.openedCourseId);
  }

  protected closeCourseDialog(): void {
    this.openedCourseId = null;
  }

  protected toggleModule(courseId: string, moduleIndex: number): void {
    const modules = this.progressState[courseId];
    modules[moduleIndex] = !modules[moduleIndex];
    this.progressState = { ...this.progressState, [courseId]: [...modules] };
    this.saveProgress();
  }

  protected isModuleComplete(courseId: string, moduleIndex: number): boolean {
    return this.progressState[courseId]?.[moduleIndex] ?? false;
  }

  protected getProgress(course: CourseCard): number {
    const completed = this.getCompletedCount(course);
    return Math.round((completed / course.modules.length) * 100);
  }

  protected getCompletedCount(course: CourseCard): number {
    return this.progressState[course.id].filter(Boolean).length;
  }

  protected resetCourse(courseId: string): void {
    const course = this.starterTracks.find((item) => item.id === courseId);
    if (!course) {
      return;
    }

    this.progressState = {
      ...this.progressState,
      [courseId]: new Array(course.modules.length).fill(false)
    };
    this.saveProgress();
  }

  private createInitialProgress(): ProgressState {
    return this.starterTracks.reduce<ProgressState>((acc, course) => {
      acc[course.id] = new Array(course.modules.length).fill(false);
      return acc;
    }, {});
  }

  private loadProgress(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as ProgressState;
      this.progressState = this.starterTracks.reduce<ProgressState>((acc, course) => {
        const saved = parsed[course.id] ?? [];
        acc[course.id] = course.modules.map((_, index) => Boolean(saved[index]));
        return acc;
      }, {});
    } catch {
      this.progressState = this.createInitialProgress();
    }
  }

  private saveProgress(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(this.progressState));
  }
}
