import { CurriculumSection } from '../types';

export const mwdCurriculum: CurriculumSection[] = [
  {
    id: 'section-1',
    title: 'Introduction to MWD & Directional Drilling',
    content: `### 1.1 What is MWD?
Measurement While Drilling (MWD) is a downhole measurement system that sends real-time data from the bottom of the wellbore to the surface while drilling is in progress.

> **Key Idea:** MWD lets the rig team steer the wellbore in real-time instead of waiting for wireline logs after drilling.

It typically provides:
*   **Directional data:** inclination, azimuth, toolface
*   **Basic formation data:** often gamma ray, sometimes other logs
*   **Tool and drilling status:** downhole temperature, battery status, etc.

---

### 1.2 MWD vs LWD vs Wireline
*   **MWD (Measurement While Drilling):** Focused on directional control and basic formation evaluation while drilling.
*   **LWD (Logging While Drilling):** More advanced formation evaluation (resistivity, density, neutron, sonic, etc.) while drilling. Often integrated with MWD tools.
*   **Wireline logging:** Tools are run on a cable after drilling a section. Provides detailed logs but not real-time while drilling.

---

### 1.3 Where MWD fits in directional drilling
Directional drilling is about controlling the path of the wellbore to hit a target in 3D space. MWD is the feedback system that tells you:
1.  **Where the bit is** (inclination, azimuth, measured depth)
2.  **How the well is trending** (build, drop, turn)
3.  **What the formation looks like** (gamma, sometimes more)

Without MWD, directional drilling becomes guesswork. With MWD, the directional driller can:
*   Adjust toolface and slide/rotate decisions
*   Stay in the target zone
*   Avoid collisions with nearby wells

---

### 1.4 Basic directional drilling concepts
*   **Measured Depth (MD):** The length along the wellbore from surface to the survey point.
*   **True Vertical Depth (TVD):** The vertical distance from surface to the survey point.
*   **Inclination:** The angle from vertical (0° = vertical, 90° = horizontal).
*   **Azimuth:** The compass direction of the wellbore (e.g., 045° = NE).
*   **Toolface:** The orientation of the bent housing or rotary steerable tool, used to steer the well.

---

### 1.5 Core components of an MWD system
#### Downhole tool string:
- MWD tool (sensors, electronics, power system)
- Telemetry section (mud pulse, EM, or wired pipe interface)
- Sometimes integrated LWD sensors (gamma, resistivity, etc.)

#### Surface equipment:
- Surface receiver (pressure transducer for mud pulse, antenna for EM, or wired interface)
- Surface decoding system (computer/software)
- Displays for surveys, toolface, gamma, and status

#### Rig integration:
- Depth tracking system
- Rig network
- Data export (e.g., WITS/WITSML) to operator and office

---

### 1.6 Role of the MWD field technician
An MWD field tech is responsible for:

#### Pre-run:
- Assembling and testing the tool
- Programming surveys and telemetry parameters
- Verifying communication and surface decoding

#### During the run:
- Monitoring real-time data (surveys, toolface, gamma, pulses)
- Ensuring data quality and reliability
- Troubleshooting telemetry or tool issues
- Communicating with the directional driller and company representative

#### Post-run:
- Downloading memory data (if applicable)
- Generating final survey reports and logs
- Documenting any issues or failures

---

### 1.7 Real-time vs memory data
*   **Real-time data:** Sent via telemetry (mud pulse, EM, wired pipe). Limited bandwidth → only key parameters are sent. Used for steering and operational decisions.
*   **Memory data:** Stored in the tool’s internal memory. Downloaded after the run. Higher resolution and more channels. Used for final logs, post-run analysis, and QC.

---

### 1.8 Why MWD quality matters
Poor MWD data can lead to:
*   Misplaced wells
*   Collisions with nearby wells
*   Poor reservoir contact
*   Lost time and cost overruns

High-quality MWD work means:
*   Accurate surveys
*   Reliable toolface
*   Clean, interpretable gamma logs
*   Clear communication with the rig team

**You are the guardian of downhole truth.**`,
    quizQuestions: [
      {
        id: 's1q1',
        question: 'What is the primary purpose of an MWD system?',
        options: ['To drill faster by increasing RPM', 'To provide real time downhole measurements while drilling', 'To replace the mud pumps on the rig', 'To run detailed wireline logs after drilling'],
        correctAnswerIndex: 1,
        explanation: 'MWD stands for Measurement While Drilling and its core purpose is to provide real time downhole measurements (such as inclination, azimuth, toolface, and sometimes gamma) while drilling is in progress.'
      },
      {
        id: 's1q2',
        question: 'Which of the following measurements is most commonly associated with MWD tools?',
        options: ['Sonic slowness', 'Inclination and azimuth', 'Cement bond quality', 'Caliper of the open hole'],
        correctAnswerIndex: 1,
        explanation: 'MWD tools are primarily responsible for directional measurements like inclination and azimuth. Sonic and cement bond logs are typically wireline or advanced LWD services.'
      },
      {
        id: 's1q3',
        question: 'How does MWD differ from wireline logging?',
        options: ['MWD is only used on land rigs, wireline only offshore', 'MWD provides measurements while drilling, wireline after drilling', 'MWD is always more accurate than wireline', 'MWD tools do not require any surface equipment'],
        correctAnswerIndex: 1,
        explanation: 'MWD provides measurements in real time while drilling. Wireline logging is performed after drilling a section, using tools run on a cable.'
      },
      {
        id: 's1q4',
        question: 'Which of the following is typically a real time MWD output?',
        options: ['Cement bond index', 'Detailed resistivity image logs', 'Inclination, azimuth, and toolface', 'Core sample lithology'],
        correctAnswerIndex: 2,
        explanation: 'Real time MWD outputs usually include directional data (inclination, azimuth, toolface) and sometimes basic formation data like gamma ray.'
      },
      {
        id: 's1q5',
        question: 'What does “toolface” represent in directional drilling?',
        options: ['The angle of the bit relative to the rig floor', 'The orientation of the steering mechanism relative to a reference', 'The depth of the bit relative to sea level', 'The angle between mud pumps and standpipe'],
        correctAnswerIndex: 1,
        explanation: 'Toolface is the orientation of the steering mechanism (e.g., bent housing or RSS) relative to a reference (high side, magnetic north, etc.), used to control the direction of the wellbore.'
      },
      {
        id: 's1q6',
        question: 'Which statement best describes the role of the MWD field technician?',
        options: ['Operates the top drive and controls drilling parameters', 'Manages downhole measurements, telemetry, and data quality', 'Supervises casing running operations', 'Designs the well trajectory in the office'],
        correctAnswerIndex: 1,
        explanation: 'The MWD field technician is responsible for managing the downhole measurement system, ensuring telemetry works, monitoring data quality, and communicating with the rig team.'
      },
      {
        id: 's1q7',
        question: 'Which of the following is a key difference between MWD and LWD?',
        options: ['MWD tools are only used in vertical wells', 'LWD tools are only used in shallow wells', 'LWD focuses more on formation evaluation, MWD on directional data', 'MWD tools do not require power, LWD tools do'],
        correctAnswerIndex: 2,
        explanation: 'MWD primarily focuses on directional and basic status data, while LWD provides more advanced formation evaluation measurements (resistivity, density, neutron, etc.).'
      },
      {
        id: 's1q8',
        question: 'Why is real time MWD data critical for directional drilling?',
        options: ['It allows the driller to reduce mud costs', 'It provides immediate feedback for steering decisions', 'It eliminates the need for any surveys', 'It replaces the need for a directional driller'],
        correctAnswerIndex: 1,
        explanation: 'Real time MWD data provides immediate feedback on wellbore position and trajectory, enabling the directional driller to make timely steering decisions.'
      },
      {
        id: 's1q9',
        question: 'Which of the following is typically stored in memory and downloaded after the run?',
        options: ['High resolution gamma ray data', 'Standpipe pressure', 'Hookload', 'Rotary torque'],
        correctAnswerIndex: 0,
        explanation: 'Many MWD/LWD tools store high resolution gamma and other logs in internal memory, which are downloaded after the run. Surface rig parameters like standpipe pressure, hookload, and torque are recorded at surface.'
      },
      {
        id: 's1q10',
        question: 'What does “MD” stand for in wellbore measurements?',
        options: ['Maximum deviation', 'Measured depth', 'Magnetic deviation', 'Mud density'],
        correctAnswerIndex: 1,
        explanation: 'MD stands for Measured Depth, which is the length along the wellbore from surface to the survey point.'
      },
      {
        id: 's1q11',
        question: 'Which pair correctly describes MD and TVD?',
        options: ['MD is vertical distance; TVD is along the wellbore', 'MD is along the wellbore; TVD is vertical distance', 'Both MD and TVD are always the same', 'MD is measured from the bit; TVD from the rig floor'],
        correctAnswerIndex: 1,
        explanation: 'MD (Measured Depth) is the length along the wellbore, while TVD (True Vertical Depth) is the vertical distance from surface to the survey point.'
      },
      {
        id: 's1q12',
        question: 'Which of the following best describes azimuth?',
        options: ['The angle from vertical', 'The angle from horizontal', 'The compass direction of the wellbore', 'The angle between mud pumps and standpipe'],
        correctAnswerIndex: 2,
        explanation: 'Azimuth is the compass direction of the wellbore, typically measured clockwise from north (0–360°).'
      },
      {
        id: 's1q13',
        question: 'Which of these is a typical responsibility of an MWD tech during pre run operations?',
        options: ['Designing the well trajectory', 'Programming and testing the MWD tool', 'Running casing and cementing', 'Operating the top drive'],
        correctAnswerIndex: 1,
        explanation: 'Pre run responsibilities for an MWD tech include assembling, programming, and testing the MWD tool to ensure it is ready for downhole deployment.'
      },
      {
        id: 's1q14',
        question: 'Why is understanding the difference between real time and memory data important for an MWD tech?',
        options: ['It determines which mud pump to use', 'It affects how the rig crew is paid', 'It defines what information is available for immediate decisions vs post run analysis', 'It changes the well trajectory design'],
        correctAnswerIndex: 2,
        explanation: 'Real time data is used for immediate operational decisions, while memory data is used for detailed post run analysis and final logs. The MWD tech must know which is which.'
      },
      {
        id: 's1q15',
        question: 'What is one major consequence of poor quality MWD data?',
        options: ['Faster drilling with lower costs', 'Improved cement bond logs', 'Misplaced wells or potential well collisions', 'Reduced need for surface equipment'],
        correctAnswerIndex: 2,
        explanation: 'Poor quality MWD data can lead to inaccurate surveys, which may result in misplaced wells or even collisions with nearby wells—serious safety and financial risks.'
      },
      {
        id: 's1q16',
        question: 'Which component of the MWD system is responsible for converting downhole sensor data into a transmittable signal?',
        options: ['Drill bit', 'Telemetry module', 'Mud pumps', 'Rotary table'],
        correctAnswerIndex: 1,
        explanation: 'The telemetry module encodes sensor data into a signal (mud pulse, EM, or wired pipe) that can be transmitted to the surface.'
      },
      {
        id: 's1q17',
        question: 'Which of the following best describes “real time” MWD data?',
        options: ['Data downloaded after the run', 'Data transmitted continuously during drilling', 'Data collected only during connections', 'Data stored only in memory'],
        correctAnswerIndex: 1,
        explanation: 'Real time data is transmitted continuously (or at set intervals) while drilling is actively occurring.'
      },
      {
        id: 's1q18',
        question: 'What is the primary reason directional drillers rely on MWD surveys?',
        options: ['To determine mud weight', 'To steer the wellbore accurately', 'To calculate bit wear', 'To determine casing depth'],
        correctAnswerIndex: 1,
        explanation: 'MWD surveys provide inclination, azimuth, and toolface, which are essential for steering the wellbore.'
      },
      {
        id: 's1q19',
        question: 'Which of the following is a typical downhole environmental factor that affects MWD tool performance?',
        options: ['Rig floor temperature', 'Surface wind speed', 'Downhole vibration and shock', 'Driller’s chair position'],
        correctAnswerIndex: 2,
        explanation: 'High vibration and shock can damage sensors, disrupt telemetry, and degrade data quality.'
      },
      {
        id: 's1q20',
        question: 'Which measurement is used to determine the vertical position of the wellbore?',
        options: ['Azimuth', 'Toolface', 'True Vertical Depth (TVD)', 'Measured Depth (MD)'],
        correctAnswerIndex: 2,
        explanation: 'TVD represents the vertical distance from surface to the survey point, independent of wellbore path.'
      },
      {
        id: 's1q21',
        question: 'What is the main purpose of gamma ray measurements in an MWD tool?',
        options: ['Determine mud density', 'Identify formation lithology', 'Measure bit RPM', 'Calculate torque and drag'],
        correctAnswerIndex: 1,
        explanation: 'Gamma ray logs help identify formation types (e.g., shale vs sand), aiding geosteering and formation evaluation.'
      },
      {
        id: 's1q22',
        question: 'Which of the following best describes the MWD tool’s power system?',
        options: ['It is powered by the rig’s generator', 'It uses downhole batteries or a turbine', 'It uses solar panels', 'It is powered by the top drive'],
        correctAnswerIndex: 1,
        explanation: 'MWD tools typically use lithium batteries, a mud driven turbine, or a hybrid system for downhole power.'
      },
      {
        id: 's1q23',
        question: 'Which statement about mud pulse telemetry is correct?',
        options: ['It requires an electrical cable to surface', 'It sends data by creating pressure variations in the drilling fluid', 'It only works in air drilling environments', 'It cannot transmit directional data'],
        correctAnswerIndex: 1,
        explanation: 'Mud pulse telemetry encodes data into pressure pulses within the drilling fluid, which are detected at surface.'
      },
      {
        id: 's1q24',
        question: 'What does the term “survey station” refer to?',
        options: ['The location of the rig’s control room', 'A point along the wellbore where directional measurements are taken', 'The surface decoding computer', 'The MWD tool’s battery compartment'],
        correctAnswerIndex: 1,
        explanation: 'A survey station is a specific depth where inclination, azimuth, and toolface are measured and recorded.'
      },
      {
        id: 's1q25',
        question: 'Which of the following is a key advantage of MWD over wireline logging?',
        options: ['Higher resolution logs', 'Real time directional control', 'Lower tool cost', 'No need for surface equipment'],
        correctAnswerIndex: 1,
        explanation: 'MWD provides real time directional data, enabling active steering—something wireline cannot do.'
      },
      {
        id: 's1q26',
        question: 'What is the purpose of the accelerometers inside an MWD tool?',
        options: ['Measure gamma ray counts', 'Measure gravity vectors for inclination', 'Measure mud flow rate', 'Measure azimuth directly'],
        correctAnswerIndex: 1,
        explanation: 'Accelerometers measure gravity vectors, which are used to calculate inclination and tool orientation.'
      },
      {
        id: 's1q27',
        question: 'Which of the following conditions can cause magnetic interference in MWD surveys?',
        options: ['High mud viscosity', 'Nearby casing or drill collars', 'Low standpipe pressure', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'Ferrous materials like casing or drill collars can distort the magnetic field, affecting azimuth accuracy.'
      },
      {
        id: 's1q28',
        question: 'What is the primary function of magnetometers in an MWD tool?',
        options: ['Measure formation density', 'Detect magnetic field vectors for azimuth', 'Measure downhole temperature', 'Detect gamma radiation'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometers measure the Earth’s magnetic field, which is used to calculate azimuth.'
      },
      {
        id: 's1q29',
        question: 'Which of the following best describes the relationship between MD and TVD in a deviated well?',
        options: ['MD is always less than TVD', 'MD and TVD are equal', 'MD is greater than TVD', 'TVD is always greater than MD'],
        correctAnswerIndex: 2,
        explanation: 'In deviated or horizontal wells, the measured depth (along the well path) is greater than the true vertical depth.'
      },
      {
        id: 's1q30',
        question: 'Why is proper surface decoding essential for MWD operations?',
        options: ['It ensures the rig pumps operate efficiently', 'It converts downhole telemetry signals into usable data', 'It prevents drillstring failures', 'It eliminates the need for surveys'],
        correctAnswerIndex: 1,
        explanation: 'Surface decoding systems interpret the telemetry signal (mud pulse, EM, or wired pipe) and convert it into readable data for the rig team.'
      },
      {
        id: 's1q31',
        question: 'Which of the following best describes the purpose of a survey program in an MWD tool?',
        options: ['To control mud pump pressure', 'To define when and how surveys are taken', 'To calculate bit wear', 'To determine casing depth'],
        correctAnswerIndex: 1,
        explanation: 'A survey program defines survey intervals, types of surveys, and how the tool collects directional data.'
      },
      {
        id: 's1q32',
        question: 'What is the main reason MWD tools require non magnetic drill collars (NMDCs)?',
        options: ['To reduce torque and drag', 'To prevent magnetic interference with sensors', 'To increase ROP', 'To improve mud flow efficiency'],
        correctAnswerIndex: 1,
        explanation: 'NMDCs isolate the MWD tool from ferrous materials that distort the magnetic field, ensuring accurate azimuth readings.'
      },
      {
        id: 's1q33',
        question: 'Which of the following is a common cause of poor toolface stability?',
        options: ['Low mud weight', 'High vibration or motor stalls', 'Excessive gamma ray counts', 'High standpipe pressure'],
        correctAnswerIndex: 1,
        explanation: 'High vibration, motor stalls, or inconsistent rotation can cause toolface to fluctuate or become unreliable.'
      },
      {
        id: 's1q34',
        question: 'What does the term “downlinking” refer to in MWD operations?',
        options: ['Sending commands from surface to the MWD tool', 'Downloading memory data after the run', 'Transmitting gamma ray logs to the operator', 'Lowering the drillstring into the well'],
        correctAnswerIndex: 0,
        explanation: 'Downlinking is the process of sending commands from surface to the tool, often by manipulating pump flow or RPM.'
      },
      {
        id: 's1q35',
        question: 'Which of the following is a typical indicator of weak mud pulse telemetry at surface?',
        options: ['Increased WOB', 'Low signal to noise ratio', 'High gamma ray readings', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'A low signal to noise ratio means the pulses are difficult to distinguish from background pressure fluctuations.'
      },
      {
        id: 's1q36',
        question: 'What is the primary purpose of the surface pressure transducer in a mud pulse system?',
        options: ['Measure mud density', 'Detect pressure pulses generated by the MWD tool', 'Control the top drive', 'Measure hookload'],
        correctAnswerIndex: 1,
        explanation: 'The surface pressure transducer detects the pressure variations created by the downhole pulser and sends them to the decoding system.'
      },
      {
        id: 's1q37',
        question: 'Which of the following best describes the role of the directional driller in relation to MWD data?',
        options: ['They repair the MWD tool when it fails', 'They interpret MWD data to steer the wellbore', 'They operate the mud pumps', 'They design the MWD tool’s electronics'],
        correctAnswerIndex: 1,
        explanation: 'The directional driller uses MWD surveys, toolface, and gamma to make steering decisions.'
      },
      {
        id: 's1q38',
        question: 'What is one advantage of EM telemetry over mud pulse telemetry?',
        options: ['It works better in highly conductive formations', 'It is unaffected by pump noise', 'It requires no surface equipment', 'It can transmit through casing easily'],
        correctAnswerIndex: 1,
        explanation: 'EM telemetry does not rely on mud pulses, so it is not affected by pump noise. However, it struggles in conductive formations.'
      },
      {
        id: 's1q39',
        question: 'Which of the following conditions can reduce the effectiveness of EM telemetry?',
        options: ['Low ROP', 'High formation conductivity', 'High gamma ray readings', 'Low mud viscosity'],
        correctAnswerIndex: 1,
        explanation: 'Highly conductive formations (e.g., saltwater sands, shales) attenuate EM signals, reducing telemetry performance.'
      },
      {
        id: 's1q40',
        question: 'Why is it important for the MWD tech to monitor standpipe pressure trends during drilling?',
        options: ['Pressure trends can indicate issues affecting telemetry quality', 'Pressure determines gamma ray count rate', 'Pressure controls azimuth accuracy', 'Pressure determines toolface orientation'],
        correctAnswerIndex: 0,
        explanation: 'Sudden pressure changes can disrupt mud pulse telemetry or indicate downhole dysfunctions that affect tool performance.'
      },
      {
        id: 's1q41',
        question: 'What does the term “toolface hold” refer to?',
        options: ['The driller locking the top drive', 'Maintaining a consistent toolface orientation during a slide', 'Holding the bit at a fixed depth', 'Keeping the pumps at a constant pressure'],
        correctAnswerIndex: 1,
        explanation: 'During sliding, the directional driller must maintain a stable toolface to steer the wellbore accurately.'
      },
      {
        id: 's1q42',
        question: 'Which of the following is a common symptom of magnetic interference affecting MWD surveys?',
        options: ['Incorrect inclination readings', 'Erratic gamma ray spikes', 'Azimuth values that drift or become unstable', 'Low mud flow rate'],
        correctAnswerIndex: 2,
        explanation: 'Magnetic interference primarily affects azimuth, causing drift, instability, or sudden directional changes.'
      },
      {
        id: 's1q43',
        question: 'What is the purpose of the MWD tool’s temperature sensor?',
        options: ['To calculate mud density', 'To monitor downhole temperature for tool health and QC', 'To determine formation porosity', 'To measure standpipe pressure'],
        correctAnswerIndex: 1,
        explanation: 'High temperatures can damage electronics or cause sensor drift, so monitoring temperature is essential for tool health.'
      },
      {
        id: 's1q44',
        question: 'Which of the following best describes the relationship between MWD and LWD tools in modern BHAs?',
        options: ['They are always run separately', 'LWD tools are typically integrated with or run above the MWD tool', 'MWD tools replace the need for LWD entirely', 'LWD tools cannot transmit data in real time'],
        correctAnswerIndex: 1,
        explanation: 'LWD tools are often integrated with or run just above the MWD tool, using the same telemetry system to send data to surface.'
      },
      {
        id: 's1q45',
        question: 'Why is consistent communication between the MWD tech and directional driller essential?',
        options: ['The MWD tech controls the bit hydraulics', 'The directional driller relies on accurate, timely data to steer the well', 'The MWD tech determines casing points', 'The directional driller programs the MWD tool'],
        correctAnswerIndex: 1,
        explanation: 'The directional driller depends on accurate, timely MWD data to make steering decisions and maintain wellbore placement.'
      }
    ]
  },
  {
    id: 'section-2',
    title: 'Drilling Mechanics & Downhole Environment',
    content: `This section teaches the trainee what the MWD tool is actually living through downhole. Understanding drilling mechanics is the difference between simply “watching data” and truly diagnosing tool behavior, telemetry issues, and survey quality.

### 2.1 The Downhole Environment: What the Tool Experiences
MWD tools operate in one of the harshest environments in the oilfield:
*   High temperature (150–175°C common, >175°C in HPHT wells)
*   Extreme vibration (axial, lateral, torsional)
*   Shock events (bit bounce, stalls, string slippage)
*   High hydrostatic pressure
*   Chemical exposure from drilling fluids
*   Continuous mechanical stress from rotation and bending

> **Key Idea:** Every measurement the tool sends to surface is influenced by these conditions. Understanding them is essential for interpreting data quality and diagnosing failures.

---

### 2.2 Weight on Bit (WOB)
WOB is the downward force applied to the bit.
*   Too little WOB → slow ROP, inefficient drilling
*   Too much WOB → bit bounce, stick slip, shock, tool damage

MWD impact: High WOB often correlates with vibration spikes, toolface instability, and telemetry dropouts.

---

### 2.3 Torque & Drag
*   **Torque:** twisting force required to rotate the drillstring
*   **Drag:** resistance when sliding or pulling the string

High torque and drag can indicate:
*   Doglegs
*   Tight hole
*   Poor hole cleaning
*   BHA dysfunction

MWD impact: Torque spikes often show up as toolface oscillation or erratic surveys.

---

### 2.4 RPM (Rotations Per Minute)
RPM affects:
*   Bit efficiency
*   Vibration levels
*   Motor performance
*   Toolface stability (in rotary mode)

*   **High RPM** → increased lateral vibration
*   **Low RPM** → increased risk of stick slip

MWD impact: RPM changes can directly affect pulse clarity, toolface, and sensor noise.

---

### 2.5 Rate of Penetration (ROP)
ROP is how fast the bit drills ahead.
*   **High ROP** → efficient drilling, but can increase cuttings load
*   **Low ROP** → may indicate dysfunction or poor parameters

MWD impact: High ROP can bury the tool in cuttings, causing:
*   Telemetry attenuation
*   Gamma lag
*   Temperature rise

---

### 2.6 Mud Flow & Hydraulics
Mud flow is the lifeblood of the MWD system.

Functions:
*   Cool the bit
*   Carry cuttings out
*   Power turbines (if used)
*   Provide the medium for mud pulse telemetry

*   **Low flow** → weak pulses, poor hole cleaning
*   **High flow** → increased ECD, risk of losses

MWD impact: Flow changes directly affect pulse amplitude, tool cooling, and turbine power.

---

### 2.7 Equivalent Circulating Density (ECD)
ECD is the effective density of the mud while circulating.

High ECD can cause:
*   Formation breakdown
*   Lost circulation
*   Stuck pipe

MWD impact: Lost circulation → telemetry loss, tool overheating, poor surveys.

---

### 2.8 Downhole Pressure Regimes
Three main regimes:
*   Overbalanced (most common)
*   Underbalanced
*   Managed pressure drilling (MPD)

MWD impact: Pressure affects:
*   Pulse transmission
*   Tool seals
*   Sensor calibration

---

### 2.9 Temperature Effects
Temperature is one of the biggest threats to MWD tools.

High temperature causes:
*   Sensor drift
*   Electronics degradation
*   Battery failure
*   Telemetry instability

**MWD techs must monitor temperature trends and anticipate failures.**

---

### 2.10 Vibration & Shock
Three main types:
*   **Axial vibration** (bit bounce)
*   **Lateral vibration** (whirl)
*   **Torsional vibration** (stick slip)

MWD impact:
*   Survey noise
*   Toolface instability
*   Telemetry dropouts
*   Premature tool failure

**Understanding vibration patterns helps techs diagnose issues before they become catastrophic.**

---

### 2.11 Drilling Dysfunction & MWD Symptoms
Common dysfunctions and their MWD signatures:
*   **Stick slip:** Erratic toolface, pulse dropout
*   **Bit bounce:** Shock spikes, survey noise
*   **Whirl:** High lateral vibration, unstable gamma
*   **Motor stalls:** Lost pulses, toolface resets
*   **Poor hole cleaning:** Gamma lag, high temperature

---

### 2.12 Why Drilling Mechanics Matter to MWD Techs
A great MWD tech doesn’t just watch numbers — they interpret them.

Understanding drilling mechanics allows you to:
*   Predict failures
*   Explain data anomalies
*   Communicate effectively with the driller
*   Protect the tool
*   Improve data quality
*   Build trust with the rig team

**This section builds the foundation for becoming a diagnostic level MWD technician.**`,
    quizQuestions: [
      {
        id: 's2q1',
        question: 'Which of the following best describes the downhole environment where MWD tools operate?',
        options: ['Low temperature and low pressure', 'High temperature, high pressure, and severe vibration', 'Stable and controlled mechanical conditions', 'Identical to surface conditions'],
        correctAnswerIndex: 1,
        explanation: 'Downhole conditions include extreme temperature, pressure, vibration, and shock — far harsher than surface conditions.'
      },
      {
        id: 's2q2',
        question: 'What is the primary purpose of Weight on Bit (WOB)?',
        options: ['To increase mud density', 'To apply downward force for drilling', 'To stabilize the drillstring', 'To reduce torque'],
        correctAnswerIndex: 1,
        explanation: 'WOB is the downward force applied to the bit to enable drilling.'
      },
      {
        id: 's2q3',
        question: 'Excessive WOB most commonly leads to which issue?',
        options: ['Improved toolface stability', 'Reduced vibration', 'Bit bounce and shock', 'Increased gamma ray counts'],
        correctAnswerIndex: 2,
        explanation: 'Too much WOB causes bit bounce and shock, which can damage tools and degrade data quality.'
      },
      {
        id: 's2q4',
        question: 'What does torque represent in drilling mechanics?',
        options: ['Vertical force on the bit', 'Resistance to rotation of the drillstring', 'Mud flow rate', 'Downhole temperature'],
        correctAnswerIndex: 1,
        explanation: 'Torque is the twisting force required to rotate the drillstring.'
      },
      {
        id: 's2q5',
        question: 'High torque and drag are often indicators of what?',
        options: ['Good hole cleaning', 'Smooth wellbore', 'Doglegs or tight hole conditions', 'Low vibration'],
        correctAnswerIndex: 2,
        explanation: 'Doglegs, tight hole, or poor hole cleaning increase torque and drag.'
      },
      {
        id: 's2q6',
        question: 'How does high RPM typically affect the MWD tool?',
        options: ['Reduces vibration', 'Increases lateral vibration and sensor noise', 'Eliminates stick slip', 'Improves pulse clarity'],
        correctAnswerIndex: 1,
        explanation: 'High RPM increases lateral vibration, which can degrade sensor accuracy and telemetry.'
      },
      {
        id: 's2q7',
        question: 'What does ROP measure?',
        options: ['Mud density', 'Rate of penetration of the bit', 'Toolface orientation', 'Standpipe pressure'],
        correctAnswerIndex: 1,
        explanation: 'ROP is the speed at which the bit drills ahead.'
      },
      {
        id: 's2q8',
        question: 'High ROP can negatively impact MWD performance by causing what?',
        options: ['Lower temperature', 'Gamma ray lag', 'Reduced vibration', 'Stronger pulses'],
        correctAnswerIndex: 1,
        explanation: 'High ROP can bury the tool in cuttings, causing gamma lag and telemetry issues.'
      },
      {
        id: 's2q9',
        question: 'What is the primary function of drilling mud in relation to MWD tools?',
        options: ['Provide lubrication only', 'Cool the bit and carry cuttings', 'Power telemetry and cool the tool', 'Replace the need for surveys'],
        correctAnswerIndex: 2,
        explanation: 'Mud cools the tool, powers turbines (if used), and carries telemetry pulses.'
      },
      {
        id: 's2q10',
        question: 'Low mud flow typically results in what MWD symptom?',
        options: ['Stronger pulses', 'Weak or unreadable telemetry', 'Lower downhole temperature', 'Improved toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'Low flow weakens mud pulse amplitude, making telemetry harder to decode.'
      },
      {
        id: 's2q11',
        question: 'What does ECD stand for?',
        options: ['Equivalent Circulating Density', 'Effective Cuttings Distribution', 'Enhanced Circulation Device', 'Environmental Control Data'],
        correctAnswerIndex: 0,
        explanation: 'ECD is the effective density of the mud while circulating.'
      },
      {
        id: 's2q12',
        question: 'High ECD can lead to which operational problem?',
        options: ['Increased ROP', 'Lost circulation', 'Lower vibration', 'Improved telemetry'],
        correctAnswerIndex: 1,
        explanation: 'High ECD can fracture formations, causing lost circulation.'
      },
      {
        id: 's2q13',
        question: 'Which downhole condition is most likely to cause sensor drift in an MWD tool?',
        options: ['Low WOB', 'High temperature', 'Low RPM', 'High gamma ray readings'],
        correctAnswerIndex: 1,
        explanation: 'High temperature affects electronics and causes sensor drift.'
      },
      {
        id: 's2q14',
        question: 'Which type of vibration is associated with stick slip?',
        options: ['Axial', 'Lateral', 'Torsional', 'Radial'],
        correctAnswerIndex: 2,
        explanation: 'Stick slip is a torsional vibration where the drillstring alternates between sticking and rapidly spinning.'
      },
      {
        id: 's2q15',
        question: 'Which drilling dysfunction is most likely to cause erratic toolface readings?',
        options: ['Smooth rotary drilling', 'High lateral vibration', 'Low standpipe pressure', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration (whirl) causes toolface to oscillate and become unstable.'
      },
      {
        id: 's2q16',
        question: 'Which drilling parameter has the greatest direct impact on mud pulse telemetry strength?',
        options: ['WOB', 'Mud flow rate', 'ROP', 'Torque'],
        correctAnswerIndex: 1,
        explanation: 'Mud pulse telemetry relies on pressure pulses carried by drilling fluid. Higher flow increases pulse amplitude and improves decoding.'
      },
      {
        id: 's2q17',
        question: 'What drilling dysfunction is characterized by alternating periods of no rotation followed by sudden high speed rotation?',
        options: ['Bit bounce', 'Whirl', 'Stick slip', 'Motor stall'],
        correctAnswerIndex: 2,
        explanation: 'Stick slip is a torsional vibration where the drillstring sticks, then releases suddenly, causing rapid rotation spikes.'
      },
      {
        id: 's2q18',
        question: 'Which condition is most likely to cause lateral vibration (whirl)?',
        options: ['Excessive WOB', 'Low RPM', 'High RPM combined with poor stabilization', 'High mud weight'],
        correctAnswerIndex: 2,
        explanation: 'High RPM and inadequate stabilization can cause the BHA to whirl inside the hole, creating lateral vibration.'
      },
      {
        id: 's2q19',
        question: 'What is the primary effect of poor hole cleaning on MWD performance?',
        options: ['Increased pulse clarity', 'Gamma ray lag and overheating', 'Reduced torque', 'Lower vibration levels'],
        correctAnswerIndex: 1,
        explanation: 'Poor hole cleaning can bury the tool in cuttings, causing gamma lag, higher temperature, and telemetry issues.'
      },
      {
        id: 's2q20',
        question: 'Which drilling parameter most directly influences bit aggressiveness and potential for bit bounce?',
        options: ['RPM', 'WOB', 'Mud density', 'Flowline temperature'],
        correctAnswerIndex: 1,
        explanation: 'Excessive WOB increases bit aggressiveness and can cause axial vibration (bit bounce).'
      },
      {
        id: 's2q21',
        question: 'What does high standpipe pressure typically indicate?',
        options: ['Low mud viscosity', 'Restricted flow path or high circulating friction', 'Low ROP', 'Good hole cleaning'],
        correctAnswerIndex: 1,
        explanation: 'High standpipe pressure often means increased friction in the system, possibly due to cuttings buildup or narrow annular space.'
      },
      {
        id: 's2q22',
        question: 'Which of the following drilling conditions is most likely to cause motor stalls?',
        options: ['Low WOB', 'Excessive WOB or sudden formation changes', 'High gamma ray readings', 'Low torque'],
        correctAnswerIndex: 1,
        explanation: 'Too much WOB or abrupt formation transitions can overload the motor, causing it to stall.'
      },
      {
        id: 's2q23',
        question: 'What is the primary purpose of drilling fluid cooling the MWD tool?',
        options: ['Improve gamma ray accuracy', 'Prevent overheating of electronics', 'Increase ROP', 'Reduce torque'],
        correctAnswerIndex: 1,
        explanation: 'Downhole temperatures can exceed tool limits; mud circulation helps cool the electronics.'
      },
      {
        id: 's2q24',
        question: 'Which of the following is a common symptom of axial vibration?',
        options: ['Erratic azimuth', 'Bit bounce and shock spikes', 'Toolface oscillation', 'Gamma ray dropout'],
        correctAnswerIndex: 1,
        explanation: 'Axial vibration (bit bounce) produces shock spikes that can damage sensors and disrupt surveys.'
      },
      {
        id: 's2q25',
        question: 'What drilling parameter is most commonly adjusted to control stick slip?',
        options: ['Mud density', 'RPM', 'Gamma ray threshold', 'Toolface offset'],
        correctAnswerIndex: 1,
        explanation: 'Adjusting RPM (often increasing it) helps reduce torsional vibration and mitigate stick slip.'
      },
      {
        id: 's2q26',
        question: 'Which downhole condition is most likely to cause sudden pulse dropout in mud pulse telemetry?',
        options: ['High ROP', 'Motor stall', 'Low gamma ray counts', 'High TVD'],
        correctAnswerIndex: 1,
        explanation: 'Motor stalls disrupt flow and pressure stability, causing telemetry pulses to disappear temporarily.'
      },
      {
        id: 's2q27',
        question: 'What does an increase in ECD typically indicate?',
        options: ['Reduced annular friction', 'Increased circulating friction or cuttings load', 'Lower standpipe pressure', 'Improved hole cleaning'],
        correctAnswerIndex: 1,
        explanation: 'Higher ECD usually means increased friction or cuttings buildup, which can lead to losses or stuck pipe.'
      },
      {
        id: 's2q28',
        question: 'Which drilling dysfunction is most likely to cause erratic gamma ray readings?',
        options: ['Whirl (lateral vibration)', 'Stick slip', 'Motor stall', 'Low WOB'],
        correctAnswerIndex: 0,
        explanation: 'Lateral vibration causes the tool to bounce against the borehole wall, creating noisy or unstable gamma readings.'
      },
      {
        id: 's2q29',
        question: 'What is the most common cause of downhole temperature spikes?',
        options: ['High mud weight', 'Poor hole cleaning and low flow', 'High RPM', 'Low torque'],
        correctAnswerIndex: 1,
        explanation: 'Poor hole cleaning traps heat around the tool, and low flow reduces cooling, causing temperature to rise.'
      },
      {
        id: 's2q30',
        question: 'Which drilling parameter has the greatest influence on annular cuttings transport?',
        options: ['RPM', 'Mud flow rate', 'WOB', 'Torque'],
        correctAnswerIndex: 1,
        explanation: 'Mud flow rate is the primary driver of cuttings transport; insufficient flow leads to buildup and dysfunction.'
      },
      {
        id: 's2q31',
        question: 'Which drilling dysfunction is most likely occurring when the drillstring vibrates violently up and down?',
        options: ['Stick slip', 'Axial vibration (bit bounce)', 'Lateral whirl', 'Motor stall'],
        correctAnswerIndex: 1,
        explanation: 'Axial vibration is characterized by vertical oscillation of the drillstring, often caused by excessive WOB or bit interaction with the formation.'
      },
      {
        id: 's2q32',
        question: 'What is the most common cause of torsional vibration in the drillstring?',
        options: ['Low mud weight', 'Stick slip', 'High gamma ray readings', 'High ECD'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip is a torsional vibration where the drillstring alternates between sticking and rapidly spinning, creating torque spikes.'
      },
      {
        id: 's2q33',
        question: 'Which drilling parameter is most directly affected when the bit encounters a harder formation?',
        options: ['WOB decreases automatically', 'Torque increases', 'RPM increases', 'Mud density decreases'],
        correctAnswerIndex: 1,
        explanation: 'Harder formations increase resistance to rotation, causing torque to rise.'
      },
      {
        id: 's2q34',
        question: 'What is a common MWD symptom of poor hole cleaning?',
        options: ['Stronger pulses', 'Gamma ray lag', 'Lower temperature', 'Improved toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'Poor hole cleaning can bury the tool in cuttings, causing gamma readings to lag behind actual formation changes.'
      },
      {
        id: 's2q35',
        question: 'Which condition is most likely to cause sudden, repeated motor stalls?',
        options: ['Low WOB', 'Excessive WOB or aggressive drilling parameters', 'Low mud flow', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'Too much WOB or aggressive drilling can overload the motor, causing it to stall repeatedly.'
      },
      {
        id: 's2q36',
        question: 'What effect does low mud flow have on turbine powered MWD tools?',
        options: ['Increased turbine speed', 'Reduced power generation', 'Improved telemetry', 'Lower vibration'],
        correctAnswerIndex: 1,
        explanation: 'Turbine powered tools rely on mud flow for power; low flow reduces turbine speed and tool power.'
      },
      {
        id: 's2q37',
        question: 'Which drilling dysfunction is most likely when the toolface swings rapidly side to side during sliding?',
        options: ['Axial vibration', 'Lateral vibration (whirl)', 'Stick slip', 'High ECD'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration causes the BHA to bounce against the borehole wall, making toolface unstable.'
      },
      {
        id: 's2q38',
        question: 'What is the primary cause of high downhole temperature during drilling?',
        options: ['High gamma ray readings', 'Poor hole cleaning and low circulation', 'High torque', 'Low WOB'],
        correctAnswerIndex: 1,
        explanation: 'Poor hole cleaning traps heat around the tool, and low flow reduces cooling, causing temperature to rise.'
      },
      {
        id: 's2q39',
        question: 'Which drilling parameter is most important for maintaining effective cuttings transport?',
        options: ['RPM', 'Mud flow rate', 'WOB', 'Torque'],
        correctAnswerIndex: 1,
        explanation: 'Mud flow rate is the primary driver of cuttings transport; insufficient flow leads to buildup and dysfunction.'
      },
      {
        id: 's2q40',
        question: 'What is the most likely cause of sudden, temporary loss of mud pulse telemetry?',
        options: ['High gamma ray counts', 'Motor stall or flow interruption', 'Low torque', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'Motor stalls or sudden flow changes disrupt pressure stability, causing pulse dropout.'
      },
      {
        id: 's2q41',
        question: 'Which drilling dysfunction is most likely when the drillstring rotates unevenly, causing torque spikes?',
        options: ['Stick slip', 'Whirl', 'Bit bounce', 'High ECD'],
        correctAnswerIndex: 0,
        explanation: 'Stick slip causes uneven rotation and torque spikes due to alternating sticking and rapid spinning.'
      },
      {
        id: 's2q42',
        question: 'What is the most likely MWD symptom of severe axial shock?',
        options: ['Smooth surveys', 'Pulse dropout and sensor noise', 'Lower temperature', 'Improved toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'Axial shock (bit bounce) creates shock spikes that disrupt sensors and telemetry.'
      },
      {
        id: 's2q43',
        question: 'Which drilling condition is most likely to cause high lateral vibration?',
        options: ['Smooth rotary drilling', 'Poor stabilization or high RPM', 'Low torque', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Poor stabilization and high RPM can cause the BHA to whirl, creating lateral vibration.'
      },
      {
        id: 's2q44',
        question: 'What is the most likely cause of a sudden increase in standpipe pressure?',
        options: ['Improved hole cleaning', 'Restricted flow path or cuttings buildup', 'Lower mud viscosity', 'Reduced torque'],
        correctAnswerIndex: 1,
        explanation: 'A sudden rise in standpipe pressure usually indicates increased friction or a restriction in the flow path.'
      },
      {
        id: 's2q45',
        question: 'Which drilling dysfunction is most likely when surveys become noisy and inconsistent without changes in drilling parameters?',
        options: ['Smooth drilling', 'Downhole vibration or shock', 'High gamma ray readings', 'Low mud flow'],
        correctAnswerIndex: 1,
        explanation: 'Vibration and shock introduce noise into accelerometer and magnetometer readings, causing survey inconsistency.'
      }
    ]
  },
  {
    id: 'section-3',
    title: 'MWD Tool Physics & Internal Architecture',
    content: `This section explains the internal components, sensors, electronics, and physics that make MWD tools function. A great MWD tech doesn’t just monitor data — they understand why the tool behaves the way it does.

### 3.1 Overview: What an MWD Tool Actually Is
An MWD tool is essentially a ruggedized, sensor packed computer designed to survive:
*   Extreme heat
*   Violent vibration
*   High pressure
*   Chemical exposure
*   Continuous rotation and bending

Inside the tool are:
*   Sensors (accelerometers, magnetometers, gamma detectors)
*   Electronics boards
*   Power systems (battery or turbine)
*   Telemetry system (mud pulse, EM, or wired pipe)
*   Memory modules
*   Communication buses

> **Key Idea:** Understanding these components helps techs diagnose failures and interpret data quality.

---

### 3.2 The Tool Body & Mechanical Structure
MWD tools are built inside non magnetic drill collars (NMDCs) to prevent magnetic interference.

Key mechanical features:
*   **Pressure barrels** protect electronics from hydrostatic pressure
*   **Shock absorbers** reduce vibration impact
*   **Centralizers** keep the tool centered in the collar
*   **Threaded connections** allow modular assembly

**The mechanical structure is designed to protect sensitive electronics from the brutal downhole environment.**

---

### 3.3 Power Systems
MWD tools use one of three power sources:

1. **Lithium Battery Packs**
*   High temperature rated
*   Long life
*   No moving parts
*   Common in motor runs and low flow environments

2. **Turbine Generators**
*   Powered by mud flow
*   Provide continuous power
*   Ideal for high flow rotary drilling

3. **Hybrid Systems**
*   Turbine + battery backup
*   Ensures power stability during flow interruptions

Power issues often show up as:
*   Telemetry dropouts
*   Tool resets
*   Temperature spikes
*   Sensor drift

---

### 3.4 Internal Electronics & Boards
Inside the tool are multiple electronics boards:
*   **Sensor board** (accelerometers, magnetometers)
*   **Telemetry board** (pulse driver, EM transmitter, wired interface)
*   **Power regulation board**
*   **Memory board**
*   **CPU / processor board**

These boards communicate through internal buses. Failures often present as:
*   No pulses
*   Corrupted surveys
*   Toolface instability
*   Temperature anomalies

---

### 3.5 Accelerometers
Accelerometers measure gravity vectors.

They determine:
*   Inclination
*   Toolface (gravity toolface)
*   Shock and vibration levels

Accelerometers are sensitive to:
*   Temperature
*   Axial shock
*   Lateral vibration
*   Sensor drift

---

### 3.6 Magnetometers
Magnetometers measure Earth’s magnetic field.

They determine:
*   Azimuth
*   Magnetic toolface
*   Magnetic interference levels

Magnetometers are affected by:
*   BHA components
*   Casing
*   Formation magnetism
*   Tool rotation
*   Temperature

**Understanding magnetometer behavior is essential for survey QC.**

---

### 3.7 Gamma Ray Detector
Most MWD tools include a natural gamma ray detector.

It measures:
*   Formation lithology
*   Shale content
*   Bed boundaries

Gamma detectors are typically:
*   Scintillation crystals
*   Photomultiplier tubes
*   Solid state detectors (newer tools)

Gamma issues often show up as:
*   Lag
*   Noise
*   Dropouts
*   Temperature related drift

---

### 3.8 Telemetry Systems
MWD tools use one of three telemetry methods:

**Mud Pulse Telemetry**
*   Positive pulse
*   Negative pulse
*   Continuous wave
*   Most common
*   Uses pressure pulses in drilling fluid

**Electromagnetic (EM) Telemetry**
*   Sends EM waves through formation
*   Fast, but limited by conductivity

**Wired Pipe Telemetry**
*   High speed digital communication
*   Rare but extremely powerful

Telemetry failures often indicate:
*   Flow issues
*   Pulser failure
*   Motor stalls
*   Electrical faults
*   Formation conductivity (EM)

---

### 3.9 Memory Systems
MWD tools store high resolution data in memory:
*   High resolution gamma
*   High resolution surveys
*   Shock/vibration logs
*   Temperature logs

Memory data is downloaded post run for:
*   Final logs
*   QC
*   Failure analysis

---

### 3.10 Tool Communication & Data Flow
Data flows through the tool in this order:
1.  Sensors collect data
2.  Processor interprets data
3.  Telemetry board encodes data
4.  Pulser/EM/wired system transmits data
5.  Surface system decodes data
6.  Rig displays show surveys, toolface, gamma

**Any failure in this chain affects data quality.**

---

### 3.11 Common Internal Failures
Common MWD internal failures include:
*   Sensor drift
*   Pulser motor failure
*   Battery depletion
*   Turbine bearing failure
*   Board overheating
*   Memory corruption
*   Magnetometer saturation

**Recognizing symptoms early prevents catastrophic failure.**

---

### 3.12 Why This Section Matters
Understanding tool physics allows MWD techs to:
*   Diagnose failures
*   Interpret survey anomalies
*   Communicate effectively with engineers
*   Protect expensive downhole equipment
*   Improve data quality
*   Build credibility on the rig

**This is the section that separates “button pushers” from true MWD professionals.**`,
    quizQuestions: [
      {
        id: 's3q1',
        question: 'What is the primary purpose of non magnetic drill collars (NMDCs) in MWD operations?',
        options: ['Increase ROP', 'Reduce torque', 'Prevent magnetic interference with sensors', 'Improve mud flow'],
        correctAnswerIndex: 2,
        explanation: 'NMDCs isolate the MWD tool from ferrous materials that distort magnetic readings.'
      },
      {
        id: 's3q2',
        question: 'Which component measures gravity vectors inside an MWD tool?',
        options: ['Magnetometer', 'Accelerometer', 'Gamma detector', 'Pulser motor'],
        correctAnswerIndex: 1,
        explanation: 'Accelerometers measure gravity vectors, which are used to calculate inclination and toolface.'
      },
      {
        id: 's3q3',
        question: 'What is the primary function of magnetometers in an MWD tool?',
        options: ['Measure gamma radiation', 'Detect Earth’s magnetic field for azimuth', 'Measure downhole pressure', 'Power the tool'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometers measure magnetic field vectors, which are used to calculate azimuth and magnetic toolface.'
      },
      {
        id: 's3q4',
        question: 'Which power system provides continuous power as long as mud is circulating?',
        options: ['Lithium battery pack', 'Turbine generator', 'Solar panel', 'Capacitor bank'],
        correctAnswerIndex: 1,
        explanation: 'Turbine generators convert mud flow into electrical power.'
      },
      {
        id: 's3q5',
        question: 'Which telemetry method uses pressure pulses in the drilling fluid?',
        options: ['EM telemetry', 'Wired pipe', 'Mud pulse telemetry', 'Acoustic telemetry'],
        correctAnswerIndex: 2,
        explanation: 'Mud pulse telemetry encodes data into pressure pulses carried by drilling fluid.'
      },
      {
        id: 's3q6',
        question: 'Which component is responsible for encoding sensor data into a transmittable signal?',
        options: ['Sensor board', 'Telemetry board', 'Gamma detector', 'Battery pack'],
        correctAnswerIndex: 1,
        explanation: 'The telemetry board converts processed data into a signal for mud pulse, EM, or wired transmission.'
      },
      {
        id: 's3q7',
        question: 'What is the primary purpose of the gamma ray detector in an MWD tool?',
        options: ['Determine toolface', 'Identify formation lithology', 'Measure mud density', 'Detect vibration'],
        correctAnswerIndex: 1,
        explanation: 'Gamma ray logs help identify lithology, especially shale content.'
      },
      {
        id: 's3q8',
        question: 'Which of the following is a common symptom of magnetometer interference?',
        options: ['Gamma lag', 'Unstable azimuth readings', 'High temperature', 'Weak pulses'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic interference primarily affects azimuth and magnetic toolface.'
      },
      {
        id: 's3q9',
        question: 'Which internal component stores high resolution data for post run analysis?',
        options: ['Telemetry board', 'Memory module', 'Pulser motor', 'Accelerometer'],
        correctAnswerIndex: 1,
        explanation: 'Memory modules store detailed logs that are downloaded after the run.'
      },
      {
        id: 's3q10',
        question: 'Which telemetry method is most affected by formation conductivity?',
        options: ['Mud pulse', 'EM telemetry', 'Wired pipe', 'Acoustic telemetry'],
        correctAnswerIndex: 1,
        explanation: 'EM signals attenuate rapidly in conductive formations like shales or saltwater sands.'
      },
      {
        id: 's3q11',
        question: 'What is the primary function of the pulser in a mud pulse system?',
        options: ['Generate electrical power', 'Create pressure pulses for telemetry', 'Measure gamma radiation', 'Stabilize the BHA'],
        correctAnswerIndex: 1,
        explanation: 'The pulser creates pressure variations in the mud that carry encoded data to surface.'
      },
      {
        id: 's3q12',
        question: 'Which internal failure is most commonly associated with high downhole temperature?',
        options: ['Pulser motor burnout', 'Magnetometer saturation', 'Battery depletion', 'Sensor drift'],
        correctAnswerIndex: 3,
        explanation: 'High temperature causes accelerometer and magnetometer drift, degrading survey accuracy.'
      },
      {
        id: 's3q13',
        question: 'Which component is responsible for processing raw sensor data inside the tool?',
        options: ['CPU/processor board', 'Battery pack', 'Pulser motor', 'Gamma detector'],
        correctAnswerIndex: 0,
        explanation: 'The processor board interprets raw sensor inputs and prepares them for telemetry.'
      },
      {
        id: 's3q14',
        question: 'Which of the following is a common cause of weak mud pulse telemetry?',
        options: ['High gamma ray readings', 'Low mud flow', 'High inclination', 'Low torque'],
        correctAnswerIndex: 1,
        explanation: 'Mud pulse telemetry depends on flow; low flow reduces pulse amplitude.'
      },
      {
        id: 's3q15',
        question: 'Which internal component is most likely to fail due to excessive vibration?',
        options: ['Memory module', 'Electronics boards and solder joints', 'Gamma detector', 'Battery casing'],
        correctAnswerIndex: 1,
        explanation: 'Vibration stresses solder joints and electronic components, leading to intermittent or total failure.'
      },
      {
        id: 's3q16',
        question: 'Which component inside an MWD tool is most responsible for regulating and distributing electrical power to all internal boards?',
        options: ['Telemetry board', 'Power regulation board', 'Memory module', 'Gamma detector'],
        correctAnswerIndex: 1,
        explanation: 'The power regulation board stabilizes voltage and distributes power to all internal electronics.'
      },
      {
        id: 's3q17',
        question: 'What is the primary purpose of shock absorbers inside an MWD tool?',
        options: ['Increase gamma ray sensitivity', 'Protect electronics from axial and lateral vibration', 'Improve mud flow efficiency', 'Reduce magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Shock absorbers cushion sensitive electronics from vibration and shock events.'
      },
      {
        id: 's3q18',
        question: 'Which sensor is most affected by magnetic interference from drill collars or casing?',
        options: ['Accelerometer', 'Magnetometer', 'Gamma detector', 'Temperature sensor'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometers measure magnetic field vectors and are highly sensitive to ferrous materials.'
      },
      {
        id: 's3q19',
        question: 'What is the primary function of the processor (CPU) board inside an MWD tool?',
        options: ['Generate pulses', 'Interpret raw sensor data and manage tool operations', 'Measure gamma radiation', 'Store memory logs'],
        correctAnswerIndex: 1,
        explanation: 'The CPU processes sensor inputs, manages tool logic, and prepares data for telemetry.'
      },
      {
        id: 's3q20',
        question: 'Which of the following is a common symptom of accelerometer failure?',
        options: ['Unstable azimuth', 'Incorrect inclination readings', 'Weak pulses', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'Accelerometers measure gravity vectors; failure leads to incorrect inclination and gravity toolface.'
      },
      {
        id: 's3q21',
        question: 'What is the purpose of the tool’s internal communication bus?',
        options: ['Transmit data between internal boards', 'Increase mud flow', 'Measure vibration', 'Control the pulser motor directly'],
        correctAnswerIndex: 0,
        explanation: 'The communication bus allows different boards (sensor, telemetry, CPU, memory) to exchange data.'
      },
      {
        id: 's3q22',
        question: 'Which telemetry method requires the pulser motor to physically move a valve or restrictor?',
        options: ['EM telemetry', 'Wired pipe', 'Mud pulse telemetry', 'Acoustic telemetry'],
        correctAnswerIndex: 2,
        explanation: 'Mud pulse telemetry uses a pulser mechanism to create pressure pulses in the drilling fluid.'
      },
      {
        id: 's3q23',
        question: 'What is the primary advantage of wired pipe telemetry over mud pulse or EM?',
        options: ['It requires no surface equipment', 'It provides extremely high data rates', 'It works better in conductive formations', 'It eliminates the need for sensors'],
        correctAnswerIndex: 1,
        explanation: 'Wired pipe offers high speed digital communication, far faster than mud pulse or EM.'
      },
      {
        id: 's3q24',
        question: 'Which internal failure is most likely when the tool repeatedly resets during drilling?',
        options: ['Magnetometer saturation', 'Power regulation failure', 'Gamma detector overload', 'Pulser valve erosion'],
        correctAnswerIndex: 1,
        explanation: 'Power regulation issues cause voltage drops, leading to tool resets.'
      },
      {
        id: 's3q25',
        question: 'Which component is responsible for detecting natural gamma radiation?',
        options: ['Photomultiplier tube or solid state detector', 'Magnetometer', 'Accelerometer', 'Pulser motor'],
        correctAnswerIndex: 0,
        explanation: 'Gamma detectors use scintillation crystals and photomultiplier tubes (or solid state sensors) to detect gamma rays.'
      },
      {
        id: 's3q26',
        question: 'Which condition is most likely to cause magnetometer saturation?',
        options: ['High temperature', 'Strong external magnetic fields', 'Low mud flow', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'Strong magnetic fields from casing, collars, or formation magnetism can saturate magnetometers.'
      },
      {
        id: 's3q27',
        question: 'What is the primary purpose of the memory module in an MWD tool?',
        options: ['Store high resolution logs for post run analysis', 'Increase pulse amplitude', 'Control the pulser motor', 'Measure downhole temperature'],
        correctAnswerIndex: 0,
        explanation: 'Memory modules store detailed logs that are downloaded after the run.'
      },
      {
        id: 's3q28',
        question: 'Which internal component is most likely to fail due to prolonged high temperature exposure?',
        options: ['Drill collar', 'Electronics boards and solder joints', 'Pulser housing', 'Stabilizers'],
        correctAnswerIndex: 1,
        explanation: 'Electronics degrade rapidly at high temperatures, leading to drift, resets, or total failure.'
      },
      {
        id: 's3q29',
        question: 'Which telemetry method is least affected by mud properties such as viscosity and flow rate?',
        options: ['Mud pulse', 'EM telemetry', 'Wired pipe', 'Continuous wave mud pulse'],
        correctAnswerIndex: 2,
        explanation: 'Wired pipe is a digital communication system and does not rely on mud flow or pressure pulses.'
      },
      {
        id: 's3q30',
        question: 'Which internal failure is most likely when surveys show sudden, unexplained jumps in inclination?',
        options: ['Magnetometer drift', 'Accelerometer malfunction', 'Pulser valve erosion', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Accelerometer issues cause incorrect gravity vector readings, leading to inclination jumps.'
      },
      {
        id: 's3q31',
        question: 'Which internal component is responsible for converting gamma ray interactions into electrical signals?',
        options: ['Magnetometer', 'Photomultiplier tube or solid state sensor', 'Accelerometer', 'Telemetry board'],
        correctAnswerIndex: 1,
        explanation: 'Gamma detectors use scintillation crystals paired with photomultiplier tubes or solid state sensors to convert gamma interactions into measurable electrical signals.'
      },
      {
        id: 's3q32',
        question: 'What is the most likely cause of sudden, unexplained azimuth swings during drilling?',
        options: ['Accelerometer drift', 'Magnetometer interference or saturation', 'Low mud flow', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth is derived from magnetic field measurements, so interference or saturation of magnetometers causes azimuth instability.'
      },
      {
        id: 's3q33',
        question: 'Which component is most responsible for generating the physical pressure pulses in a mud pulse telemetry system?',
        options: ['CPU board', 'Pulser motor and valve assembly', 'Memory module', 'Gamma detector'],
        correctAnswerIndex: 1,
        explanation: 'The pulser motor drives a valve or restrictor that creates pressure pulses in the drilling fluid.'
      },
      {
        id: 's3q34',
        question: 'What is the primary purpose of the tool’s temperature sensor?',
        options: ['Improve gamma ray accuracy', 'Monitor downhole temperature to protect electronics', 'Measure mud density', 'Control the pulser motor'],
        correctAnswerIndex: 1,
        explanation: 'Temperature sensors help monitor thermal conditions that can damage electronics or cause sensor drift.'
      },
      {
        id: 's3q35',
        question: 'Which internal failure is most likely when the tool stops transmitting but memory data is still intact after the run?',
        options: ['CPU failure', 'Telemetry system failure', 'Accelerometer malfunction', 'Magnetometer drift'],
        correctAnswerIndex: 1,
        explanation: 'If memory logs are intact but no real time data was transmitted, the telemetry system (pulser, EM, or wired interface) likely failed.'
      },
      {
        id: 's3q36',
        question: 'Which component is most responsible for determining magnetic toolface?',
        options: ['Accelerometers only', 'Magnetometers only', 'Combination of accelerometers and magnetometers', 'Gamma detector'],
        correctAnswerIndex: 2,
        explanation: 'Magnetic toolface requires both gravity vectors (accelerometers) and magnetic field vectors (magnetometers).'
      },
      {
        id: 's3q37',
        question: 'What is the most likely cause of a pulser motor overheating?',
        options: ['High gamma ray counts', 'Excessive mud solids or debris', 'Low temperature', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Solids and debris can clog or overload the pulser mechanism, causing the motor to overheat.'
      },
      {
        id: 's3q38',
        question: 'Which internal failure is most likely when inclination remains stable but azimuth becomes erratic?',
        options: ['Accelerometer failure', 'Magnetometer interference', 'Memory corruption', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Inclination is gravity based, while azimuth is magnetic; erratic azimuth with stable inclination indicates magnetometer issues.'
      },
      {
        id: 's3q39',
        question: 'Which telemetry method is most likely to fail during a motor stall?',
        options: ['Wired pipe', 'EM telemetry', 'Mud pulse telemetry', 'Acoustic telemetry'],
        correctAnswerIndex: 2,
        explanation: 'Mud pulse telemetry depends on stable flow; motor stalls disrupt flow and pressure, causing pulse dropout.'
      },
      {
        id: 's3q40',
        question: 'Which internal component is most sensitive to lateral vibration (whirl)?',
        options: ['Gamma detector', 'Magnetometers', 'Battery pack', 'Temperature sensor'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration causes rapid changes in tool orientation, which magnetometers detect as unstable magnetic readings.'
      },
      {
        id: 's3q41',
        question: 'What is the most likely cause of sudden, repeated tool resets during drilling?',
        options: ['High gamma ray counts', 'Power regulation issues or voltage drops', 'Low inclination', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'Voltage instability from power regulation failures causes the tool to reboot repeatedly.'
      },
      {
        id: 's3q42',
        question: 'Which internal failure is most likely when gamma ray readings become noisy but surveys remain stable?',
        options: ['Magnetometer drift', 'Accelerometer malfunction', 'Gamma detector or electronics noise', 'Pulser failure'],
        correctAnswerIndex: 2,
        explanation: 'Noisy gamma with stable surveys indicates an issue isolated to the gamma detection system.'
      },
      {
        id: 's3q43',
        question: 'Which component is responsible for storing survey data before it is transmitted or saved to memory?',
        options: ['CPU/processor board', 'Pulser motor', 'Temperature sensor', 'Stabilizer'],
        correctAnswerIndex: 0,
        explanation: 'The CPU processes and temporarily stores survey data before sending it to telemetry or memory.'
      },
      {
        id: 's3q44',
        question: 'What is the most likely cause of a complete loss of both real time telemetry and memory data?',
        options: ['Magnetometer interference', 'Total electronics failure or catastrophic power loss', 'Gamma detector malfunction', 'Pulser valve erosion'],
        correctAnswerIndex: 1,
        explanation: 'If both real time and memory data are lost, the entire electronics system likely failed.'
      },
      {
        id: 's3q45',
        question: 'Which internal failure is most likely when the toolface freezes at a constant value despite rotation?',
        options: ['Accelerometer failure', 'Magnetometer saturation', 'Pulser motor burnout', 'CPU overheating'],
        correctAnswerIndex: 0,
        explanation: 'Toolface requires accelerometer input; if accelerometers fail, toolface may freeze or become unresponsive.'
      }
    ]
  },
  {
    id: 'section-4',
    title: 'Survey Fundamentals',
    content: `This section explains how MWD tools measure inclination, azimuth, and toolface — and how those measurements are converted into surveys that directional drillers rely on. A strong grasp of survey fundamentals is essential for accurate well placement and high quality MWD work.

4.1 What Is a Survey?
A survey is a directional measurement taken at a specific depth that describes the 3D position of the wellbore. Each survey includes:
• Inclination (angle from vertical)
• Azimuth (compass direction)
• Toolface (orientation of the tool)
• Measured Depth (MD)
Surveys are taken at regular intervals (e.g., every 30 ft, 90 ft, or 100 ft) depending on operator requirements.

4.2 Gravity and Magnetic Field Vectors
MWD tools measure two sets of vectors:
Gravity vectors (from accelerometers)
Used to calculate:
• Inclination
• Gravity toolface
Magnetic vectors (from magnetometers)
Used to calculate:
• Azimuth
• Magnetic toolface
The tool combines these vectors to determine its orientation in 3D space.

4.3 Inclination
Inclination is the angle between the wellbore and vertical.
• 0° = perfectly vertical
• 90° = perfectly horizontal
Calculated using accelerometer data:
• High side direction
• Gravity magnitude
• Tool orientation
Inclination is generally more stable than azimuth because gravity is a strong, consistent reference.

4.4 Azimuth
Azimuth is the compass direction of the wellbore, measured clockwise from north (0–360°).
Azimuth is calculated using:
• Magnetic field vectors
• Gravity vectors (to correct for tool tilt)
Azimuth is more sensitive to:
• Magnetic interference
• BHA components
• Casing
• Formation magnetism
• Temperature
Understanding azimuth quality is essential for survey QC.

4.5 Toolface
Toolface describes the orientation of the tool relative to a reference.
Two types:
Gravity Toolface
Used in sliding mode (motor runs). Reference: high side of the hole.
Magnetic Toolface
Used in rotary mode. Reference: magnetic north.
Toolface is critical for steering decisions.

4.6 Survey Stations
A survey station is a depth where a survey is taken.
Survey intervals depend on:
• Operator requirements
• Well complexity
• Anti collision rules
• Tool capabilities
Common intervals: 30 ft, 90 ft, 100 ft.

4.7 Minimum Curvature Method
The minimum curvature method is the industry standard for calculating the 3D path between survey stations.
It uses:
• Inclination
• Azimuth
• MD
• Dogleg severity (DLS)
This method assumes the smoothest possible curve between two points.

4.8 Dogleg Severity (DLS)
DLS measures how sharply the wellbore is turning.
High DLS can cause:
• Torque and drag
• BHA stress
• Survey errors
• Toolface instability
MWD techs must monitor DLS to ensure data quality and drilling efficiency.

4.9 Survey Quality Control (QC)
Survey QC includes checking:
• Gravity magnitude
• Magnetic magnitude
• Dip angle
• Cross axial interference
• Sensor balance
• Temperature effects
• Consistency with previous surveys
Good QC prevents inaccurate well placement.

4.10 Magnetic Interference
Magnetic interference distorts magnetometer readings, causing azimuth errors.
Sources include:
• Drill collars
• Motors
• Stabilizers
• Casing
• Formation magnetism
Interference is one of the most common causes of survey inaccuracy.

4.11 In Field Referencing (IFR)
IFR corrects magnetic field values using:
• Local magnetic models
• Reference stations
• Survey correction algorithms
IFR improves azimuth accuracy in areas with magnetic anomalies.

4.12 Multi Station Analysis (MSA)
MSA uses multiple surveys to detect:
• Sensor bias
• Magnetic interference
• Accelerometer drift
• Tool misalignment
MSA is a powerful QC tool for high accuracy wells.

4.13 Why Survey Fundamentals Matter
Accurate surveys are essential for:
• Steering the well
• Avoiding collisions
• Hitting the target zone
• Maintaining wellbore quality
• Ensuring safe operations
A strong understanding of survey fundamentals is one of the most important skills an MWD tech can develop.`,
    quizQuestions: [
      {
        id: 's4q1',
        question: 'What does a survey primarily measure in directional drilling?',
        options: ['Mud density', 'The 3D position of the wellbore', 'Gamma ray intensity', 'Tool battery voltage'],
        correctAnswerIndex: 1,
        explanation: 'Surveys provide inclination, azimuth, and depth, which define the wellbore’s 3D position.'
      },
      {
        id: 's4q2',
        question: 'Which sensors provide the gravity vectors used to calculate inclination?',
        options: ['Magnetometers', 'Accelerometers', 'Gamma detectors', 'Temperature sensors'],
        correctAnswerIndex: 1,
        explanation: 'Accelerometers measure gravity vectors, which are used to calculate inclination and gravity toolface.'
      },
      {
        id: 's4q3',
        question: 'Which sensors provide the magnetic field vectors used to calculate azimuth?',
        options: ['Accelerometers', 'Magnetometers', 'Gamma detectors', 'Pressure sensors'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometers measure Earth’s magnetic field, which is used to calculate azimuth.'
      },
      {
        id: 's4q4',
        question: 'Inclination is defined as the angle between the wellbore and which reference?',
        options: ['Magnetic north', 'Horizontal plane', 'Vertical direction', 'High side of the hole'],
        correctAnswerIndex: 2,
        explanation: 'Inclination is the angle from vertical, ranging from 0° (vertical) to 90° (horizontal).'
      },
      {
        id: 's4q5',
        question: 'Azimuth is measured relative to which reference?',
        options: ['High side of the hole', 'Magnetic north', 'True vertical depth', 'Mud flow direction'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth is the compass direction of the wellbore, measured clockwise from magnetic north.'
      },
      {
        id: 's4q6',
        question: 'Which type of toolface is used during sliding (motor) drilling?',
        options: ['Magnetic toolface', 'Gravity toolface', 'True toolface', 'Relative toolface'],
        correctAnswerIndex: 1,
        explanation: 'Gravity toolface is used during sliding because the tool is not rotating and must reference the high side of the hole.'
      },
      {
        id: 's4q7',
        question: 'Which type of toolface is used during rotary drilling?',
        options: ['Gravity toolface', 'Magnetic toolface', 'Relative toolface', 'True toolface'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic toolface is used in rotary mode because the tool rotates and must reference magnetic north.'
      },
      {
        id: 's4q8',
        question: 'What is a survey station?',
        options: ['A surface computer used for decoding', 'A depth where a directional measurement is taken', 'A gamma ray calibration point', 'A downhole pressure sensor'],
        correctAnswerIndex: 1,
        explanation: 'A survey station is a specific depth where inclination and azimuth are measured.'
      },
      {
        id: 's4q9',
        question: 'What is the industry standard method for calculating the well path between survey stations?',
        options: ['Linear interpolation', 'Minimum curvature method', 'High side projection', 'Magnetic correction method'],
        correctAnswerIndex: 1,
        explanation: 'The minimum curvature method assumes the smoothest possible curve between survey points.'
      },
      {
        id: 's4q10',
        question: 'Dogleg severity (DLS) measures what?',
        options: ['Mud flow rate', 'The sharpness of the wellbore’s turn', 'Gamma ray intensity', 'Tool battery voltage'],
        correctAnswerIndex: 1,
        explanation: 'DLS quantifies how sharply the wellbore is turning between survey stations.'
      },
      {
        id: 's4q11',
        question: 'Which of the following is a common cause of azimuth inaccuracy?',
        options: ['High ROP', 'Magnetic interference', 'Low gamma ray counts', 'High WOB'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic interference distorts magnetometer readings, causing azimuth errors.'
      },
      {
        id: 's4q12',
        question: 'Which QC check ensures that magnetic field strength is within expected limits?',
        options: ['Gravity magnitude check', 'Magnetic magnitude check', 'Temperature drift check', 'Gamma consistency check'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic magnitude checks verify that magnetometer readings match expected Earth field strength.'
      },
      {
        id: 's4q13',
        question: 'What is the purpose of In Field Referencing (IFR)?',
        options: ['Increase gamma ray resolution', 'Correct magnetic field values for local anomalies', 'Improve mud pulse telemetry', 'Reduce toolface oscillation'],
        correctAnswerIndex: 1,
        explanation: 'IFR improves azimuth accuracy by correcting magnetic field values using local reference data.'
      },
      {
        id: 's4q14',
        question: 'What does Multi Station Analysis (MSA) help detect?',
        options: ['Mud pump failures', 'Sensor bias and magnetic interference', 'Gamma ray lag', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'MSA analyzes multiple surveys to identify sensor bias, interference, and misalignment.'
      },
      {
        id: 's4q15',
        question: 'Why is survey QC essential for directional drilling?',
        options: ['It reduces mud costs', 'It ensures accurate well placement and collision avoidance', 'It increases ROP', 'It improves gamma ray resolution'],
        correctAnswerIndex: 1,
        explanation: 'Accurate surveys are critical for steering the well and preventing collisions with nearby wells.'
      },
      {
        id: 's4q16',
        question: 'Which of the following is the primary reason azimuth is more prone to error than inclination?',
        options: ['Gravity is weaker than the magnetic field', 'Magnetic field measurements are easily distorted', 'Inclination requires more complex calculations', 'Azimuth is calculated using gamma ray data'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometers are sensitive to interference from BHA components, casing, and formation magnetism, making azimuth more error prone.'
      },
      {
        id: 's4q17',
        question: 'Which reference is used to calculate gravity toolface?',
        options: ['Magnetic north', 'True north', 'High side of the hole', 'Surface coordinate system'],
        correctAnswerIndex: 2,
        explanation: 'Gravity toolface uses the high side of the hole as its reference, making it ideal for sliding.'
      },
      {
        id: 's4q18',
        question: 'Which reference is used to calculate magnetic toolface?',
        options: ['High side of the hole', 'True vertical depth', 'Magnetic north', 'Mud flow direction'],
        correctAnswerIndex: 2,
        explanation: 'Magnetic toolface references magnetic north and is used during rotary drilling.'
      },
      {
        id: 's4q19',
        question: 'What does a high dogleg severity (DLS) indicate?',
        options: ['The wellbore is turning sharply', 'The wellbore is perfectly straight', 'The gamma ray is increasing', 'The toolface is stable'],
        correctAnswerIndex: 0,
        explanation: 'High DLS means the wellbore is changing direction rapidly between survey stations.'
      },
      {
        id: 's4q20',
        question: 'Which of the following is a common symptom of magnetic interference?',
        options: ['Inclination drift', 'Azimuth instability', 'Gamma ray lag', 'High standpipe pressure'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic interference distorts magnetometer readings, causing azimuth to drift or become unstable.'
      },
      {
        id: 's4q21',
        question: 'Which QC check ensures that accelerometer readings are within expected limits?',
        options: ['Magnetic dip angle', 'Gravity magnitude', 'Temperature drift', 'Gamma consistency'],
        correctAnswerIndex: 1,
        explanation: 'Gravity magnitude checks confirm that accelerometers are reading the correct gravitational field strength.'
      },
      {
        id: 's4q22',
        question: 'What is the purpose of checking magnetic dip angle during survey QC?',
        options: ['Verify gamma ray calibration', 'Ensure the tool is not overheating', 'Confirm magnetometer readings match expected Earth field values', 'Determine toolface orientation'],
        correctAnswerIndex: 2,
        explanation: 'Dip angle checks help verify that magnetometers are reading the magnetic field correctly.'
      },
      {
        id: 's4q23',
        question: 'Which of the following conditions is most likely to cause cross axial interference?',
        options: ['High mud weight', 'Magnetic components too close to the sensors', 'High ROP', 'Low inclination'],
        correctAnswerIndex: 1,
        explanation: 'Ferrous components near the sensors distort magnetic field vectors, causing cross axial interference.'
      },
      {
        id: 's4q24',
        question: 'Which survey parameter is most affected by accelerometer drift?',
        options: ['Azimuth', 'Inclination', 'Gamma ray', 'Tool battery voltage'],
        correctAnswerIndex: 1,
        explanation: 'Inclination is calculated from gravity vectors; accelerometer drift directly affects inclination accuracy.'
      },
      {
        id: 's4q25',
        question: 'What is the primary purpose of survey intervals (e.g., every 30 ft or 90 ft)?',
        options: ['Reduce mud pump usage', 'Provide regular directional updates for steering', 'Improve gamma ray resolution', 'Reduce toolface oscillation'],
        correctAnswerIndex: 1,
        explanation: 'Regular survey intervals ensure accurate tracking of the wellbore’s 3D position for steering and anti collision.'
      },
      {
        id: 's4q26',
        question: 'Which of the following is a key input for the minimum curvature method?',
        options: ['Gamma ray intensity', 'Dogleg severity', 'Mud density', 'Standpipe pressure'],
        correctAnswerIndex: 1,
        explanation: 'The minimum curvature method uses DLS to calculate the smoothest path between survey stations.'
      },
      {
        id: 's4q27',
        question: 'What is the purpose of applying magnetic corrections to surveys?',
        options: ['Improve gamma ray accuracy', 'Adjust for local magnetic anomalies', 'Increase ROP', 'Reduce vibration'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic corrections (including IFR) adjust magnetometer readings to account for local magnetic variations.'
      },
      {
        id: 's4q28',
        question: 'Which of the following is a common indicator of poor survey quality?',
        options: ['Stable inclination', 'Consistent gamma ray', 'Gravity magnitude outside expected limits', 'High ROP'],
        correctAnswerIndex: 2,
        explanation: 'Incorrect gravity magnitude suggests accelerometer issues, which compromise survey accuracy.'
      },
      {
        id: 's4q29',
        question: 'Which QC method analyzes multiple consecutive surveys to detect sensor bias?',
        options: ['Gamma smoothing', 'Multi Station Analysis (MSA)', 'Magnetic dip correction', 'Toolface averaging'],
        correctAnswerIndex: 1,
        explanation: 'MSA compares multiple surveys to identify bias, interference, or misalignment.'
      },
      {
        id: 's4q30',
        question: 'Why is azimuth more difficult to calculate accurately in high inclination wells?',
        options: ['Gravity becomes too weak', 'Magnetic field vectors become less reliable as the tool approaches horizontal', 'Gamma ray readings interfere with magnetometers', 'Temperature increases significantly'],
        correctAnswerIndex: 1,
        explanation: 'In high inclination wells, the magnetic field vector becomes nearly horizontal, making azimuth calculations more sensitive to interference and noise.'
      },
      {
        id: 's4q31',
        question: 'Which survey parameter is most sensitive to magnetic interference?',
        options: ['Inclination', 'Azimuth', 'Gamma ray', 'Measured depth'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth relies on magnetometer readings, which are easily distorted by magnetic interference.'
      },
      {
        id: 's4q32',
        question: 'Which QC check helps verify that accelerometers are properly aligned and functioning?',
        options: ['Magnetic dip angle', 'Gravity magnitude', 'Gamma smoothing', 'Toolface averaging'],
        correctAnswerIndex: 1,
        explanation: 'Gravity magnitude checks confirm that accelerometers are reading the correct gravitational field strength.'
      },
      {
        id: 's4q33',
        question: 'What is the most likely cause when inclination remains stable but azimuth suddenly becomes erratic?',
        options: ['Accelerometer drift', 'Magnetometer interference', 'Gamma detector failure', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth depends on magnetic field vectors; interference causes instability while inclination remains unaffected.'
      },
      {
        id: 's4q34',
        question: 'Which of the following is a key indicator of cross axial magnetic interference?',
        options: ['High gamma ray readings', 'Magnetic magnitude outside expected limits', 'Low standpipe pressure', 'High WOB'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic magnitude checks reveal when magnetometer readings are distorted by nearby ferrous components.'
      },
      {
        id: 's4q35',
        question: 'What does a low gravity magnitude reading typically indicate?',
        options: ['High gamma ray counts', 'Accelerometer malfunction or misalignment', 'Magnetic interference', 'High temperature'],
        correctAnswerIndex: 1,
        explanation: 'Gravity magnitude outside expected limits suggests accelerometer issues, affecting inclination accuracy.'
      },
      {
        id: 's4q36',
        question: 'Which survey parameter is most affected when accelerometers experience temperature related drift?',
        options: ['Azimuth', 'Inclination', 'Gamma ray', 'Measured depth'],
        correctAnswerIndex: 1,
        explanation: 'Inclination is derived from gravity vectors; accelerometer drift directly impacts inclination.'
      },
      {
        id: 's4q37',
        question: 'What is the purpose of comparing magnetic magnitude to expected Earth field values?',
        options: ['Determine gamma ray calibration', 'Verify magnetometer accuracy', 'Calculate toolface', 'Measure downhole pressure'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic magnitude checks ensure magnetometers are reading the correct magnetic field strength.'
      },
      {
        id: 's4q38',
        question: 'Which condition is most likely to cause poor azimuth quality in a horizontal well?',
        options: ['Low ROP', 'Magnetic field vector becoming nearly horizontal', 'High gamma ray counts', 'Low mud flow'],
        correctAnswerIndex: 1,
        explanation: 'In horizontal wells, the magnetic field vector becomes less distinct, making azimuth calculations more sensitive to noise.'
      },
      {
        id: 's4q39',
        question: 'What is the primary purpose of survey QC before sending surveys to the directional driller?',
        options: ['Improve ROP', 'Ensure accuracy and prevent steering errors', 'Reduce mud costs', 'Increase gamma resolution'],
        correctAnswerIndex: 1,
        explanation: 'Accurate surveys are essential for correct steering decisions and collision avoidance.'
      },
      {
        id: 's4q40',
        question: 'Which of the following is a common symptom of accelerometer misalignment?',
        options: ['Erratic azimuth', 'Incorrect inclination', 'Gamma ray dropout', 'Weak pulses'],
        correctAnswerIndex: 1,
        explanation: 'Accelerometer misalignment affects gravity vector calculations, leading to inclination errors.'
      },
      {
        id: 's4q41',
        question: 'What does a magnetic dip angle significantly different from expected values indicate?',
        options: ['High gamma ray readings', 'Magnetometer interference or sensor bias', 'Low WOB', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'Dip angle deviations suggest magnetometer distortion or bias, affecting azimuth accuracy.'
      },
      {
        id: 's4q42',
        question: 'Which survey parameter is most likely to be affected by casing magnetism?',
        options: ['Inclination', 'Azimuth', 'Gamma ray', 'Measured depth'],
        correctAnswerIndex: 1,
        explanation: 'Casing is ferrous and distorts magnetic fields, causing azimuth errors.'
      },
      {
        id: 's4q43',
        question: 'What is the purpose of using multiple survey stations in Multi Station Analysis (MSA)?',
        options: ['Improve gamma ray smoothing', 'Detect sensor bias and interference trends', 'Increase survey frequency', 'Reduce toolface oscillation'],
        correctAnswerIndex: 1,
        explanation: 'MSA compares multiple surveys to identify bias, interference, and misalignment.'
      },
      {
        id: 's4q44',
        question: 'Which of the following is a common cause of inconsistent survey results between stations?',
        options: ['Stable drilling parameters', 'Magnetic interference or sensor drift', 'Low gamma ray counts', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Inconsistent surveys often indicate interference or sensor issues affecting magnetometers or accelerometers.'
      },
      {
        id: 's4q45',
        question: 'Why is accurate azimuth critical for directional drilling?',
        options: ['It determines mud pump efficiency', 'It defines the wellbore’s compass direction for steering', 'It controls gamma ray resolution', 'It determines toolface during sliding'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth defines the directional heading of the wellbore, essential for steering and avoiding collisions.'
      }
    ]
  },
  {
    id: 'section-5',
    title: 'Magnetic Interference & Survey Corrections',
    content: `Magnetic interference is one of the most common causes of survey inaccuracy. Understanding how it works — and how to correct it — is essential for producing reliable directional data.
This section gives trainees the tools to identify interference, correct for it, and maintain survey integrity in real world drilling environments.

> **Key Idea:** A great MWD hand understands sensor physics, recognizes interference, and QC’s every survey to protect the wellbore path.

---

### 5.1 What Is Magnetic Interference?
Magnetic interference occurs when external magnetic fields distort the Earth’s natural magnetic field, causing incorrect magnetometer readings.
Sources include:
* **Drill collars**
* **Motors**
* **Stabilizers**
* **Casing**
* **Formation magnetism**
* **Nearby wells**
* **Surface magnetic anomalies**

Interference primarily affects azimuth and magnetic toolface.

---

### 5.2 Types of Magnetic Interference
There are two major categories:
1. **Axial Interference**
    * Magnetic field distortion along the tool’s axis
    * Often caused by long ferrous components
    * Harder to detect
    * Causes azimuth bias
2. **Cross Axial Interference**
    * Distortion perpendicular to the tool’s axis
    * Often caused by stabilizers, motors, or collars
    * Easier to detect
    * Causes inconsistent azimuth and toolface

Both types degrade survey accuracy.

---

### 5.3 BHA Components That Cause Interference
Common offenders:
* **Mud motors** (strong magnetic signatures)
* **Stabilizers**
* **Drill collars**
* **RSS tools**
* **Measurement subs**
* **Casing strings**

The closer these components are to the MWD sensors, the worse the interference.

---

### 5.4 Formation Related Magnetic Interference
Some formations naturally distort magnetic fields:
* **Basalt**
* **Iron rich formations**
* **Volcanic intrusions**
* **Magnetite bearing rocks**

These can cause:
* **Azimuth drift**
* **Magnetic magnitude anomalies**
* **Dip angle inconsistencies**

Formation interference is often subtle and requires QC to detect.

---

### 5.5 Magnetic Magnitude & Dip Angle Checks
Two key QC checks:
* **Magnetic Magnitude:** Compares measured magnetic field strength to expected Earth values. High or low magnitude indicates interference.
* **Dip Angle:** Compares measured dip to expected dip for the region. Deviations indicate interference or sensor bias.

These checks are essential for survey QC.

---

### 5.6 Magnetic Toolface vs Gravity Toolface
Magnetic interference affects:
* **Magnetic toolface**
* **Azimuth**

Gravity toolface is unaffected by magnetic interference, which is why:
* **Sliding** uses gravity toolface
* **Rotary** uses magnetic toolface

Understanding the difference is critical for diagnosing interference.

---

### 5.7 In Field Referencing (IFR)
IFR corrects magnetic field values using:
* **Local magnetic models**
* **Reference stations**
* **Correction algorithms**

IFR improves azimuth accuracy in areas with magnetic anomalies, formation interference, or regional magnetic variation. IFR is essential for high accuracy wells.

---

### 5.8 Multi Station Analysis (MSA)
MSA uses multiple surveys to detect:
* **Sensor bias**
* **Magnetic interference**
* **Tool misalignment**
* **Accelerometer drift**

MSA is a powerful QC tool for identifying subtle interference patterns.

---

### 5.9 BHA Design for Magnetic Accuracy
To reduce interference:
* **Place MWD sensors** in non mag collars
* **Maintain proper spacing** from motors and stabilizers
* **Use long NMDCs** for high accuracy wells
* **Avoid placing magnetic components** near sensors

Good BHA design prevents many survey issues.

---

### 5.10 Survey Corrections
Corrections include:
* **IFR corrections**
* **MSA corrections**
* **Cross axial interference corrections**
* **Axial interference modeling**
* **Magnetic declination adjustments**

These corrections improve survey accuracy and reduce risk.

---

### 5.11 When Surveys Cannot Be Corrected
Some interference is too severe to fix.
Examples:
* **Sensors too close** to a motor
* **Severe formation magnetism**
* **Damaged magnetometers**
* **Saturated sensors**

In these cases:
* Surveys may be flagged as invalid
* Additional non mag spacing may be required
* A gyro run may be needed

---

### 5.12 Why Magnetic Interference Matters
Poor magnetic data can lead to:
* **Incorrect azimuth**
* **Misplaced wells**
* **Anti collision violations**
* **Lost production**
* **Safety risks**

A great MWD tech knows how to detect interference early and take corrective action.`,
    quizQuestions: [
      {
        id: 's5q1',
        question: 'Which survey parameter is most affected by magnetic interference?',
        options: ['Inclination', 'Azimuth', 'Gamma ray', 'Measured depth'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic interference distorts magnetometer readings, which directly affects azimuth.'
      },
      {
        id: 's5q2',
        question: 'Which BHA component is most commonly associated with strong magnetic interference?',
        options: ['Non mag collar', 'Mud motor', 'Stabilizer blade', 'Bit nozzle'],
        correctAnswerIndex: 1,
        explanation: 'Mud motors contain strong magnetic materials that distort magnetic field measurements.'
      },
      {
        id: 's5q3',
        question: 'What type of interference occurs when magnetic distortion is perpendicular to the tool’s axis?',
        options: ['Axial interference', 'Cross axial interference', 'Dip interference', 'Gravity interference'],
        correctAnswerIndex: 1,
        explanation: 'Cross axial interference affects magnetic readings perpendicular to the tool axis.'
      },
      {
        id: 's5q4',
        question: 'Which QC check compares measured magnetic field strength to expected Earth values?',
        options: ['Gravity magnitude', 'Magnetic magnitude', 'Dip angle', 'Toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic magnitude checks detect interference by comparing measured field strength to expected values.'
      },
      {
        id: 's5q5',
        question: 'Which QC check compares measured dip angle to expected regional dip?',
        options: ['Magnetic magnitude', 'Gravity magnitude', 'Dip angle check', 'Toolface offset'],
        correctAnswerIndex: 2,
        explanation: 'Dip angle checks help identify interference or magnetometer bias.'
      },
      {
        id: 's5q6',
        question: 'Which type of toolface is unaffected by magnetic interference?',
        options: ['Magnetic toolface', 'Gravity toolface', 'True toolface', 'Relative toolface'],
        correctAnswerIndex: 1,
        explanation: 'Gravity toolface uses accelerometer data and is not affected by magnetic distortion.'
      },
      {
        id: 's5q7',
        question: 'Which telemetry mode is most affected by magnetic interference?',
        options: ['Mud pulse', 'EM telemetry', 'Wired pipe', 'None — telemetry is not affected'],
        correctAnswerIndex: 3,
        explanation: 'Magnetic interference affects surveys, not telemetry systems.'
      },
      {
        id: 's5q8',
        question: 'Which formation type is most likely to cause natural magnetic interference?',
        options: ['Sandstone', 'Limestone', 'Basalt', 'Shale'],
        correctAnswerIndex: 2,
        explanation: 'Basalt and iron rich formations distort magnetic fields.'
      },
      {
        id: 's5q9',
        question: 'Which survey correction method uses local magnetic models to improve azimuth accuracy?',
        options: ['MSA', 'IFR', 'DLS correction', 'Gamma smoothing'],
        correctAnswerIndex: 1,
        explanation: 'In Field Referencing (IFR) corrects magnetic field values using local reference data.'
      },
      {
        id: 's5q10',
        question: 'Which method analyzes multiple surveys to detect sensor bias and interference?',
        options: ['IFR', 'MSA', 'DLS calculation', 'Toolface averaging'],
        correctAnswerIndex: 1,
        explanation: 'Multi Station Analysis (MSA) identifies bias and interference trends across multiple survey stations.'
      },
      {
        id: 's5q11',
        question: 'Which condition is most likely to cause magnetometer saturation?',
        options: ['High temperature', 'Strong external magnetic fields', 'Low mud flow', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'Strong magnetic fields from motors, collars, or formations can saturate magnetometers.'
      },
      {
        id: 's5q12',
        question: 'Which BHA design choice helps reduce magnetic interference?',
        options: ['Short NMDC spacing', 'Long NMDC spacing', 'Placing the motor close to the sensors', 'Using more stabilizers'],
        correctAnswerIndex: 1,
        explanation: 'Longer non mag spacing reduces magnetic distortion from nearby components.'
      },
      {
        id: 's5q13',
        question: 'Which survey parameter is most likely to drift when magnetometers are affected by interference?',
        options: ['Inclination', 'Azimuth', 'Gamma ray', 'Temperature'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometer distortion primarily affects azimuth.'
      },
      {
        id: 's5q14',
        question: 'Which situation may require a gyro run instead of MWD surveys?',
        options: ['High ROP', 'Severe magnetic interference', 'Low gamma ray counts', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Gyros are used when magnetic interference is too severe for reliable MWD surveys.'
      },
      {
        id: 's5q15',
        question: 'Which of the following is a common symptom of cross axial interference?',
        options: ['Stable azimuth', 'Erratic magnetic toolface', 'Low gamma ray counts', 'High standpipe pressure'],
        correctAnswerIndex: 1,
        explanation: 'Cross axial interference causes magnetic toolface and azimuth to fluctuate.'
      },
      {
        id: 's5q16',
        question: 'Which of the following is a common symptom of axial magnetic interference?',
        options: ['Erratic gamma ray readings', 'Consistent azimuth bias in one direction', 'Sudden inclination spikes', 'Weak mud pulse telemetry'],
        correctAnswerIndex: 1,
        explanation: 'Axial interference distorts magnetic readings along the tool axis, causing a consistent azimuth bias rather than random fluctuations.'
      },
      {
        id: 's5q17',
        question: 'Which condition is most likely to cause cross axial interference?',
        options: ['A motor placed too close to the MWD sensors', 'Low mud flow', 'High ROP', 'High gamma ray counts'],
        correctAnswerIndex: 0,
        explanation: 'Magnetic components near the sensors distort magnetic field vectors perpendicular to the tool axis, causing cross axial interference.'
      },
      {
        id: 's5q18',
        question: 'Which QC parameter is most useful for detecting formation related magnetic interference?',
        options: ['Gravity magnitude', 'Magnetic magnitude', 'Standpipe pressure', 'Toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'Formation magnetism alters magnetic field strength, which is detected through magnetic magnitude checks.'
      },
      {
        id: 's5q19',
        question: 'Which of the following is a likely cause when both magnetic magnitude and dip angle deviate from expected values?',
        options: ['Accelerometer drift', 'Magnetometer interference', 'Gamma detector failure', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Deviations in both magnetic magnitude and dip angle strongly indicate magnetic interference or magnetometer bias.'
      },
      {
        id: 's5q20',
        question: 'What is the primary purpose of using long non mag collars in the BHA?',
        options: ['Increase ROP', 'Reduce vibration', 'Isolate sensors from magnetic components', 'Improve gamma ray resolution'],
        correctAnswerIndex: 2,
        explanation: 'Long NMDCs create distance between sensors and magnetic components, reducing interference.'
      },
      {
        id: 's5q21',
        question: 'Which type of interference is most likely when magnetic toolface fluctuates rapidly while gravity toolface remains stable?',
        options: ['Axial interference', 'Cross axial interference', 'Temperature drift', 'Accelerometer failure'],
        correctAnswerIndex: 1,
        explanation: 'Cross axial interference causes magnetic toolface instability, while gravity toolface remains unaffected.'
      },
      {
        id: 's5q22',
        question: 'Which survey correction method is specifically designed to detect and correct sensor bias?',
        options: ['IFR', 'MSA', 'DLS correction', 'Gamma smoothing'],
        correctAnswerIndex: 1,
        explanation: 'Multi Station Analysis identifies sensor bias by comparing multiple consecutive surveys.'
      },
      {
        id: 's5q23',
        question: 'Which situation is most likely to require IFR corrections?',
        options: ['High vibration', 'Regional magnetic anomalies', 'Low mud flow', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'IFR corrects for regional magnetic variations that distort magnetometer readings.'
      },
      {
        id: 's5q24',
        question: 'Which of the following is a common symptom of magnetometer saturation?',
        options: ['Inclination drift', 'Azimuth values stuck or pegged', 'Gamma ray spikes', 'Weak pulses'],
        correctAnswerIndex: 1,
        explanation: 'When magnetometers saturate, they cannot measure the magnetic field correctly, causing azimuth to freeze or peg at extreme values.'
      },
      {
        id: 's5q25',
        question: 'Which BHA design issue most commonly leads to severe magnetic interference?',
        options: ['Too much non mag spacing', 'Motor placed too close to the MWD sensors', 'Excessive stabilizers', 'High bit RPM'],
        correctAnswerIndex: 1,
        explanation: 'Motors contain strong magnetic materials; placing them too close to sensors causes severe interference.'
      },
      {
        id: 's5q26',
        question: 'Which QC parameter is most useful for detecting axial interference?',
        options: ['Magnetic magnitude', 'Dip angle', 'Gravity magnitude', 'Toolface stability'],
        correctAnswerIndex: 0,
        explanation: 'Axial interference often shows up as abnormal magnetic magnitude values.'
      },
      {
        id: 's5q27',
        question: 'Which condition is most likely when azimuth is biased but stable, rather than erratic?',
        options: ['Cross axial interference', 'Axial interference', 'Gamma ray lag', 'Accelerometer drift'],
        correctAnswerIndex: 1,
        explanation: 'Axial interference produces a consistent azimuth bias rather than random fluctuations.'
      },
      {
        id: 's5q28',
        question: 'Which of the following is a sign that surveys may be uncorrectable?',
        options: ['Slight dip angle deviation', 'Magnetic magnitude far outside expected limits', 'High gamma ray counts', 'Low ROP'],
        correctAnswerIndex: 1,
        explanation: 'Severe magnetic magnitude deviation indicates interference too strong for reliable correction.'
      },
      {
        id: 's5q29',
        question: 'Which survey parameter is most likely to remain accurate during magnetic interference?',
        options: ['Azimuth', 'Magnetic toolface', 'Gravity toolface', 'Dip angle'],
        correctAnswerIndex: 2,
        explanation: 'Gravity toolface uses accelerometer data and is unaffected by magnetic distortion.'
      },
      {
        id: 's5q30',
        question: 'Which situation most strongly indicates the need for a gyro run?',
        options: ['High ROP', 'Severe magnetic interference that cannot be corrected', 'Low mud flow', 'High gamma ray readings'],
        correctAnswerIndex: 1,
        explanation: 'Gyros are used when magnetic interference is too severe for MWD surveys to remain reliable.'
      },
      {
        id: 's5q31',
        question: 'Which condition is most likely when magnetic toolface is unstable but inclination and gravity toolface remain stable?',
        options: ['Accelerometer drift', 'Cross axial magnetic interference', 'High vibration', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Cross axial interference affects magnetic readings but does not impact gravity based measurements like inclination or gravity toolface.'
      },
      {
        id: 's5q32',
        question: 'Which QC indicator is most useful for detecting axial magnetic interference?',
        options: ['Dip angle deviation', 'Gravity magnitude', 'Magnetic magnitude bias', 'Gamma ray consistency'],
        correctAnswerIndex: 2,
        explanation: 'Axial interference typically shows up as a consistent magnetic magnitude bias along the tool axis.'
      },
      {
        id: 's5q33',
        question: 'Which situation most strongly suggests formation related magnetic interference rather than BHA related interference?',
        options: ['Interference only occurs near casing', 'Interference appears in specific depth intervals', 'Interference increases with RPM', 'Interference disappears when sliding'],
        correctAnswerIndex: 1,
        explanation: 'Formation interference is depth dependent, appearing only in certain geological zones.'
      },
      {
        id: 's5q34',
        question: 'Which of the following is a common symptom of magnetometer bias?',
        options: ['Sudden inclination spikes', 'Consistent azimuth offset across multiple surveys', 'Gamma ray dropout', 'Weak mud pulse telemetry'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometer bias produces a consistent azimuth offset rather than random fluctuations.'
      },
      {
        id: 's5q35',
        question: 'Which condition is most likely when both magnetic magnitude and dip angle are within expected limits, but azimuth is still unstable?',
        options: ['Accelerometer drift', 'High vibration affecting magnetometers', 'Severe axial interference', 'Memory corruption'],
        correctAnswerIndex: 1,
        explanation: 'Vibration can cause magnetometers to oscillate even when magnetic field values appear normal.'
      },
      {
        id: 's5q36',
        question: 'Which BHA design issue is most likely to cause cross axial interference?',
        options: ['Short NMDC spacing', 'Excessive stabilizers', 'Motor placed too close to sensors', 'High bit RPM'],
        correctAnswerIndex: 2,
        explanation: 'Motors contain strong magnetic components; placing them too close to sensors causes cross axial distortion.'
      },
      {
        id: 's5q37',
        question: 'Which survey correction method is most effective for identifying subtle magnetic interference trends across multiple stations?',
        options: ['IFR', 'MSA', 'DLS smoothing', 'Toolface averaging'],
        correctAnswerIndex: 1,
        explanation: 'Multi Station Analysis compares multiple surveys to detect subtle interference patterns and sensor bias.'
      },
      {
        id: 's5q38',
        question: 'Which condition is most likely when magnetic magnitude is significantly higher than expected?',
        options: ['Accelerometer failure', 'Strong external magnetic fields', 'Low mud flow', 'High gamma ray counts'],
        correctAnswerIndex: 1,
        explanation: 'High magnetic magnitude indicates strong magnetic fields from BHA components or formation magnetism.'
      },
      {
        id: 's5q39',
        question: 'Which condition is most likely when magnetic magnitude is significantly lower than expected?',
        options: ['Magnetometer saturation', 'Accelerometer drift', 'High vibration', 'Low ROP'],
        correctAnswerIndex: 0,
        explanation: 'Saturated magnetometers cannot measure the full magnetic field, resulting in abnormally low magnitude readings.'
      },
      {
        id: 's5q40',
        question: 'Which situation most strongly indicates cross axial interference rather than axial interference?',
        options: ['Azimuth is biased but stable', 'Magnetic toolface fluctuates rapidly', 'Dip angle is consistently low', 'Gravity magnitude is incorrect'],
        correctAnswerIndex: 1,
        explanation: 'Cross axial interference causes unstable magnetic toolface and erratic azimuth.'
      },
      {
        id: 's5q41',
        question: 'Which condition is most likely when surveys show inconsistent azimuth values only while rotating?',
        options: ['Gravity toolface error', 'Magnetic interference amplified by rotation', 'Accelerometer drift', 'Gamma ray noise'],
        correctAnswerIndex: 1,
        explanation: 'Rotation amplifies magnetic distortion from nearby components, causing azimuth instability.'
      },
      {
        id: 's5q42',
        question: 'Which of the following is a strong indicator that surveys cannot be corrected using IFR or MSA?',
        options: ['Slight dip angle deviation', 'Magnetic magnitude far outside acceptable limits', 'High gamma ray counts', 'Low ROP'],
        correctAnswerIndex: 1,
        explanation: 'Severe magnetic magnitude deviation indicates interference too strong for correction.'
      },
      {
        id: 's5q43',
        question: 'Which condition is most likely when azimuth freezes at a constant value despite changes in tool orientation?',
        options: ['Accelerometer failure', 'Magnetometer saturation', 'Pulser failure', 'High vibration'],
        correctAnswerIndex: 1,
        explanation: 'Saturated magnetometers cannot detect changes in magnetic field direction, causing azimuth to freeze.'
      },
      {
        id: 's5q44',
        question: 'Which situation most strongly suggests the need for additional non mag spacing in the BHA?',
        options: ['High gamma ray readings', 'Persistent magnetic interference despite corrections', 'High standpipe pressure', 'Low mud flow'],
        correctAnswerIndex: 1,
        explanation: 'If interference persists even after corrections, increasing non mag spacing is often required.'
      },
      {
        id: 's5q45',
        question: 'Which condition most strongly indicates that a gyro run is required?',
        options: ['High vibration', 'Severe magnetic interference that cannot be corrected', 'High ROP', 'Low inclination'],
        correctAnswerIndex: 1,
        explanation: 'Gyros are used when magnetic interference is too severe for MWD surveys to remain reliable.'
      }
    ]
  },
  {
    id: 'section-6',
    title: 'Gamma Ray Logging & Formation Evaluation',
    content: `Gamma ray is the most common formation evaluation measurement included in MWD tools. It’s simple, reliable, and incredibly useful for identifying lithology, correlating to offset wells, and supporting geosteering decisions.
This section teaches trainees how gamma ray works, what it measures, how to interpret it, and how to recognize when the data is wrong.

> **Key Idea:** Gamma ray is the "eyes" of the MWD tool, allowing us to see the formation even when we can't see the bit.

---

### 6.1 What Is Gamma Ray Logging?
Gamma ray logging measures natural radioactivity in formations. Most radioactive elements occur in shales, so gamma ray is primarily used to:
* **Identify shale vs. sand**
* **Correlate formations**
* **Detect bed boundaries**
* **Support geosteering decisions**

Gamma ray is included in nearly all MWD tools because it provides valuable formation information with minimal power and bandwidth.

---

### 6.2 How Gamma Ray Detectors Work
MWD gamma detectors typically use:
* **Scintillation Crystals:** Sodium iodide (NaI) or similar. Emit light when struck by gamma photons.
* **Photomultiplier Tubes (PMTs):** Convert light flashes into electrical pulses.
* **Solid State Detectors:** Newer tools. More stable at high temperature, lower drift, and higher resolution.

The detector counts gamma photons and converts them into API units.

---

### 6.3 Gamma Ray API Units
Gamma ray is measured in API units, a standardized scale.
Typical values:
* **0–50 API:** Clean sands, carbonates
* **50–150 API:** Mixed lithology
* **150+ API:** Shales

Operators often set custom cutoffs depending on the basin.

---

### 6.4 What Gamma Ray Tells You
Gamma ray helps identify:
* **Shale content**
* **Formation tops**
* **Bed boundaries**
* **Correlation markers**
* **Reservoir quality**
* **Structural changes**

It is one of the most important logs for geosteering.

---

### 6.5 Gamma Ray Lag
Gamma ray lag occurs when the gamma detector is behind the bit, meaning:
* **The gamma tool** is several feet above the bit
* **Formation changes** appear delayed
* **High ROP** increases lag
* **Poor hole cleaning** increases lag

MWD techs must understand lag to avoid misinterpreting formation changes.

---

### 6.6 Gamma Ray Noise & Artifacts
Common causes of noisy gamma:
* **Lateral vibration**
* **Poor hole cleaning**
* **High ROP**
* **Temperature drift**
* **Electronic noise**
* **Tool rotation** (in some designs)

Recognizing noise prevents incorrect formation interpretation.

---

### 6.7 Gamma Ray QC
QC checks include:
* **Consistency** with offset wells
* **Smoothness** of the curve
* **Correlation** with lithology
* **Temperature stability**
* **Comparison** to memory data post run

Good QC ensures reliable formation evaluation.

---

### 6.8 Gamma Ray in Geosteering
Gamma ray is used to:
* **Identify shale boundaries**
* **Stay within target zones**
* **Detect faults** or structural changes
* **Correlate** to offset logs
* **Support directional decisions**

Even though MWD gamma is lower resolution than wireline, it is essential for real time steering.

---

### 6.9 Gamma Ray vs. Resistivity
Gamma ray measures natural radioactivity. Resistivity measures formation fluid content.
Key differences:
* **Gamma Ray:** Lithology indicator (Shale vs sand). Always included in MWD.
* **Resistivity:** Fluid indicator (Hydrocarbon vs water). Optional LWD sensor.

Understanding both helps build a complete formation picture.

---

### 6.10 Gamma Ray Memory vs Real Time
* **Real time gamma:** Lower resolution, limited bandwidth, slightly delayed.
* **Memory gamma:** High resolution, used for final logs, better for correlation.

MWD techs must know the difference.

---

### 6.11 Gamma Ray Calibration
Calibration ensures:
* **Correct API scaling**
* **Stable detector response**
* **Accurate correlation** to offset wells

Calibration issues cause drift, incorrect API values, and noisy logs.

---

### 6.12 Why Gamma Ray Matters
Gamma ray is essential for:
* **Formation identification**
* **Geosteering**
* **Correlation**
* **Reservoir navigation**
* **Well placement accuracy**

A strong understanding of gamma ray interpretation is a core MWD skill.`,
    quizQuestions: [
      {
        id: 's6q1',
        question: 'What does gamma ray logging primarily measure?',
        options: ['Formation density', 'Natural radioactivity', 'Mud weight', 'Downhole pressure'],
        correctAnswerIndex: 1,
        explanation: 'Gamma ray logs measure natural radioactivity, which is highest in shales.'
      },
      {
        id: 's6q2',
        question: 'Which formation type typically shows the highest gamma ray values?',
        options: ['Clean sandstone', 'Carbonate', 'Shale', 'Salt'],
        correctAnswerIndex: 2,
        explanation: 'Shales contain radioactive elements like potassium and thorium, producing high gamma readings.'
      },
      {
        id: 's6q3',
        question: 'Gamma ray values are measured in which unit?',
        options: ['API units', 'Ohm meters', 'PSI', 'Degrees'],
        correctAnswerIndex: 0,
        explanation: 'Gamma ray logs use API units, a standardized industry scale.'
      },
      {
        id: 's6q4',
        question: 'Which component converts scintillation light into electrical pulses?',
        options: ['Magnetometer', 'Photomultiplier tube', 'Accelerometer', 'Pulser motor'],
        correctAnswerIndex: 1,
        explanation: 'PMTs convert light flashes from the scintillation crystal into electrical signals.'
      },
      {
        id: 's6q5',
        question: 'Which gamma ray range typically indicates clean sand or carbonate?',
        options: ['0–50 API', '50–150 API', '150–250 API', '250+ API'],
        correctAnswerIndex: 0,
        explanation: 'Clean sands and carbonates have low natural radioactivity.'
      },
      {
        id: 's6q6',
        question: 'What is gamma ray lag?',
        options: ['A delay caused by low mud flow', 'A delay caused by the gamma tool being above the bit', 'A delay caused by high temperature', 'A delay caused by magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Gamma lag occurs because the detector is located above the bit, causing formation changes to appear delayed.'
      },
      {
        id: 's6q7',
        question: 'Which condition increases gamma ray lag?',
        options: ['Low ROP', 'High ROP', 'Low inclination', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High ROP increases the distance between the bit and the gamma detector relative to drilling progress.'
      },
      {
        id: 's6q8',
        question: 'Which of the following is a common cause of noisy gamma ray data?',
        options: ['High WOB', 'Lateral vibration', 'Low inclination', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration causes the tool to bounce against the borehole wall, creating noisy gamma readings.'
      },
      {
        id: 's6q9',
        question: 'Which type of gamma detector is more stable at high temperature?',
        options: ['Scintillation crystal', 'Photomultiplier tube', 'Solid state detector', 'Magnetometer'],
        correctAnswerIndex: 2,
        explanation: 'Solid state detectors are more temperature stable and produce less drift.'
      },
      {
        id: 's6q10',
        question: 'Which gamma ray data type is higher resolution?',
        options: ['Real time gamma', 'Memory gamma', 'Magnetic gamma', 'Dip corrected gamma'],
        correctAnswerIndex: 1,
        explanation: 'Memory gamma is stored at high resolution and downloaded after the run.'
      },
      {
        id: 's6q11',
        question: 'Which of the following is a key use of gamma ray in geosteering?',
        options: ['Determining mud weight', 'Identifying shale boundaries', 'Measuring toolface', 'Calculating DLS'],
        correctAnswerIndex: 1,
        explanation: 'Gamma ray helps identify shale boundaries and correlate formations for steering.'
      },
      {
        id: 's6q12',
        question: 'Which condition most likely causes gamma ray drift?',
        options: ['High vibration', 'High temperature', 'Low ROP', 'High mud flow'],
        correctAnswerIndex: 1,
        explanation: 'Temperature affects detector sensitivity, causing drift.'
      },
      {
        id: 's6q13',
        question: 'Which QC check helps verify gamma ray consistency?',
        options: ['Magnetic magnitude', 'Comparison to offset logs', 'Dip angle', 'Gravity magnitude'],
        correctAnswerIndex: 1,
        explanation: 'Comparing gamma to offset logs helps validate formation correlation.'
      },
      {
        id: 's6q14',
        question: 'Which formation type typically shows low gamma ray values?',
        options: ['Shale', 'Sandstone', 'Basalt', 'Magnetite rich rock'],
        correctAnswerIndex: 1,
        explanation: 'Clean sandstones have low natural radioactivity.'
      },
      {
        id: 's6q15',
        question: 'Which condition is most likely to cause gamma ray noise during sliding?',
        options: ['High WOB', 'Lateral vibration', 'Low inclination', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration during sliding causes the tool to bounce, creating noisy gamma readings.'
      },
      {
        id: 's6q16',
        question: 'Which condition is most likely to increase gamma ray noise?',
        options: ['Low ROP', 'High lateral vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration causes the tool to bounce against the borehole wall, creating noisy gamma readings.'
      },
      {
        id: 's6q17',
        question: 'Which factor most strongly influences gamma ray lag?',
        options: ['Mud weight', 'Tool position above the bit', 'Temperature', 'Azimuth'],
        correctAnswerIndex: 1,
        explanation: 'Gamma detectors are located above the bit, so formation changes appear delayed.'
      },
      {
        id: 's6q18',
        question: 'Which condition increases gamma ray lag the most?',
        options: ['Low ROP', 'High ROP', 'Low inclination', 'High mud flow'],
        correctAnswerIndex: 1,
        explanation: 'High ROP increases the distance drilled before the gamma detector reaches the new formation.'
      },
      {
        id: 's6q19',
        question: 'Which gamma ray detector type is most resistant to temperature related drift?',
        options: ['Scintillation crystal', 'Photomultiplier tube', 'Solid state detector', 'Magnetometer'],
        correctAnswerIndex: 2,
        explanation: 'Solid state detectors are more stable at high temperatures and produce less drift.'
      },
      {
        id: 's6q20',
        question: 'Which formation type typically produces the lowest gamma ray readings?',
        options: ['Shale', 'Clean sandstone', 'Basalt', 'Magnetite rich rock'],
        correctAnswerIndex: 1,
        explanation: 'Clean sands have low natural radioactivity and therefore low gamma values.'
      },
      {
        id: 's6q21',
        question: 'Which condition is most likely to cause gamma ray drift over time?',
        options: ['High mud flow', 'High temperature', 'Low ROP', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Temperature affects detector sensitivity, causing gradual drift in gamma readings.'
      },
      {
        id: 's6q22',
        question: 'Which QC method helps validate gamma ray accuracy by comparing to known formation markers?',
        options: ['Magnetic magnitude', 'Offset well correlation', 'Dip angle check', 'Gravity magnitude'],
        correctAnswerIndex: 1,
        explanation: 'Comparing gamma to offset logs helps confirm correct formation identification.'
      },
      {
        id: 's6q23',
        question: 'Which condition is most likely to cause gamma ray spikes during drilling?',
        options: ['High WOB', 'Lateral vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration causes erratic contact with the borehole wall, producing spikes.'
      },
      {
        id: 's6q24',
        question: 'Which gamma ray characteristic is most useful for identifying formation tops?',
        options: ['Absolute API value', 'Sudden changes in gamma trend', 'Temperature stability', 'Toolface orientation'],
        correctAnswerIndex: 1,
        explanation: 'Formation tops are often marked by sharp changes in gamma ray response.'
      },
      {
        id: 's6q25',
        question: 'Which gamma ray range typically indicates shale rich formations?',
        options: ['0–50 API', '50–150 API', '150+ API', '300+ API'],
        correctAnswerIndex: 2,
        explanation: 'Shales contain radioactive elements, producing high gamma readings.'
      },
      {
        id: 's6q26',
        question: 'Which condition is most likely when gamma ray appears delayed relative to drilling progress?',
        options: ['Gamma noise', 'Gamma lag', 'Temperature drift', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Gamma lag occurs because the detector is above the bit, causing delayed formation response.'
      },
      {
        id: 's6q27',
        question: 'Which factor most strongly affects gamma ray resolution in real time telemetry?',
        options: ['Mud weight', 'Telemetry bandwidth', 'Inclination', 'WOB'],
        correctAnswerIndex: 1,
        explanation: 'Real time gamma is compressed for transmission, reducing resolution compared to memory data.'
      },
      {
        id: 's6q28',
        question: 'Which condition is most likely to cause gamma ray readings to appear smoother than expected?',
        options: ['High vibration', 'Low sampling rate in real time telemetry', 'High ROP', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Real time gamma is often averaged or downsampled, producing a smoother curve.'
      },
      {
        id: 's6q29',
        question: 'Which gamma ray behavior is most useful for geosteering?',
        options: ['Absolute API values', 'Relative changes and trends', 'Temperature corrected values', 'Toolface corrected values'],
        correctAnswerIndex: 1,
        explanation: 'Geosteering relies on changes in gamma trends to identify boundaries and stay in zone.'
      },
      {
        id: 's6q30',
        question: 'Which condition is most likely when gamma ray values drift upward slowly over time without formation changes?',
        options: ['High ROP', 'Temperature related detector drift', 'Cross axial interference', 'Poor hole cleaning'],
        correctAnswerIndex: 1,
        explanation: 'Temperature affects detector sensitivity, causing gradual drift in gamma readings.'
      },
      {
        id: 's6q31',
        question: 'Which condition is most likely when gamma ray values appear delayed compared to offset logs?',
        options: ['Gamma noise', 'Gamma lag', 'Temperature drift', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Gamma lag occurs because the detector is above the bit, causing delayed formation response.'
      },
      {
        id: 's6q32',
        question: 'Which factor most strongly affects the smoothness of real time gamma ray data?',
        options: ['WOB', 'Telemetry bandwidth', 'Mud weight', 'Inclination'],
        correctAnswerIndex: 1,
        explanation: 'Real time gamma is downsampled and averaged due to limited telemetry bandwidth, making it smoother.'
      },
      {
        id: 's6q33',
        question: 'Which condition is most likely when gamma ray values fluctuate rapidly without corresponding formation changes?',
        options: ['High lateral vibration', 'High mud weight', 'Low inclination', 'Low ROP'],
        correctAnswerIndex: 0,
        explanation: 'Lateral vibration causes the tool to bounce, producing noisy or erratic gamma readings.'
      },
      {
        id: 's6q34',
        question: 'Which gamma ray behavior is most useful for identifying formation boundaries?',
        options: ['Absolute API values', 'Sudden changes in gamma trend', 'Temperature corrected values', 'Toolface corrected values'],
        correctAnswerIndex: 1,
        explanation: 'Formation boundaries are typically marked by sharp changes in gamma ray response.'
      },
      {
        id: 's6q35',
        question: 'Which condition is most likely when gamma ray values slowly drift upward over time?',
        options: ['High ROP', 'Temperature related detector drift', 'Cross axial interference', 'Poor hole cleaning'],
        correctAnswerIndex: 1,
        explanation: 'Temperature affects detector sensitivity, causing gradual drift in gamma readings.'
      },
      {
        id: 's6q36',
        question: 'Which gamma ray data type is most accurate for post run formation correlation?',
        options: ['Real time gamma', 'Memory gamma', 'Magnetic gamma', 'Dip corrected gamma'],
        correctAnswerIndex: 1,
        explanation: 'Memory gamma is high resolution and used for final logs and correlation.'
      },
      {
        id: 's6q37',
        question: 'Which condition is most likely when gamma ray values appear artificially smooth?',
        options: ['High vibration', 'Low sampling rate in real time telemetry', 'High ROP', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Real time gamma is often averaged or downsampled, producing a smoother curve.'
      },
      {
        id: 's6q38',
        question: 'Which formation type typically produces moderate gamma ray values (50–150 API)?',
        options: ['Clean sandstone', 'Pure shale', 'Mixed lithology', 'Salt'],
        correctAnswerIndex: 2,
        explanation: 'Mixed lithologies produce intermediate gamma values.'
      },
      {
        id: 's6q39',
        question: 'Which condition is most likely when gamma ray values show periodic spikes during rotation?',
        options: ['Temperature drift', 'Tool rotation causing wall contact', 'Magnetic interference', 'Low mud flow'],
        correctAnswerIndex: 1,
        explanation: 'Some gamma tools are sensitive to rotation, especially when contacting the borehole wall.'
      },
      {
        id: 's6q40',
        question: 'Which QC method helps confirm that gamma ray trends match expected geology?',
        options: ['Gravity magnitude', 'Offset log correlation', 'Dip angle check', 'Magnetic magnitude'],
        correctAnswerIndex: 1,
        explanation: 'Comparing gamma to offset logs validates formation interpretation.'
      },
      {
        id: 's6q41',
        question: 'Which condition is most likely when gamma ray values drop unexpectedly in a known shale interval?',
        options: ['Detector drift', 'Tool standoff or poor borehole contact', 'High mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Poor contact with the borehole wall can reduce gamma counts.'
      },
      {
        id: 's6q42',
        question: 'Which factor most strongly affects gamma ray resolution in memory mode?',
        options: ['Mud weight', 'Sampling rate', 'Inclination', 'WOB'],
        correctAnswerIndex: 1,
        explanation: 'Memory gamma is recorded at a high sampling rate, giving it superior resolution.'
      },
      {
        id: 's6q43',
        question: 'Which condition is most likely when gamma ray values appear lower than expected across multiple formations?',
        options: ['High ROP', 'Detector calibration issue', 'High vibration', 'High mud flow'],
        correctAnswerIndex: 1,
        explanation: 'Calibration issues can shift the entire gamma scale downward.'
      },
      {
        id: 's6q44',
        question: 'Which gamma ray behavior is most useful for detecting faults or structural changes?',
        options: ['Absolute API value', 'Abrupt shifts in gamma trends', 'Temperature corrected values', 'Toolface corrected values'],
        correctAnswerIndex: 1,
        explanation: 'Faults and structural changes often produce sudden gamma shifts.'
      },
      {
        id: 's6q45',
        question: 'Which condition is most likely when gamma ray values become erratic only during sliding?',
        options: ['High WOB', 'Lateral vibration during motor slides', 'High mud weight', 'Low inclination'],
        correctAnswerIndex: 1,
        explanation: 'Sliding often increases lateral vibration, causing noisy gamma readings.'
      }
    ]
  },
  {
    id: 'section-7',
    title: 'Surface Systems, Decoding, & Real Time Operations',
    content: `This section teaches trainees how the surface MWD system works — how pulses are decoded, how data flows from the tool to the rig floor, and how the MWD operator monitors, interprets, and validates real time data. This is the operational backbone of the job.

> **Key Idea:** The surface system is the bridge between downhole physics and the driller's decisions.

---

### 7.1 Overview of Surface MWD Systems
The surface system is responsible for:
* **Detecting** mud pulse or EM signals
* **Decoding** telemetry
* **Displaying** real time surveys, toolface, gamma, and diagnostics
* **Logging** data
* **Communicating** with directional drillers and company men

A strong understanding of the surface system is essential for reliable operations.

---

### 7.2 Mud Pulse Detection Equipment
For mud pulse telemetry, the surface system includes:
* **Standpipe Pressure Transducer (SPT):** Measures pressure fluctuations in the standpipe. Primary sensor for pulse detection.
* **Flowline Pressure Transducer:** Secondary sensor. Helps confirm pulse quality.
* **Surface Filters & Dampeners:** Remove pump noise and pressure spikes. Improve signal to noise ratio (SNR).
* **Signal Cables:** Connect transducers to the MWD surface computer. Must be shielded to prevent electrical interference.

---

### 7.3 Decoding & Signal Processing
The MWD surface computer processes the raw pressure signal to extract data:
* **Filtering:** Digital filters remove pump noise and harmonics. High pass and low pass filters isolate the pulse frequency.
* **Thresholding:** Identifies pulses based on amplitude and duration. Must be adjusted as mud properties or pump rates change.
* **Decoding:** Converts pulse sequences into binary data. Translates binary into engineering units (e.g., 45.2° inclination).
* **Error Checking:** Parity bits and checksums verify data integrity. Invalid data is flagged or discarded.

---

### 7.4 Real Time Data Monitoring
The MWD operator monitors several key data streams:
* **Surveys:** Inclination, Azimuth, and Toolface. Used to track the wellbore path.
* **Gamma Ray:** Real time formation evaluation. Used for correlation and geosteering.
* **Tool Diagnostics:** Battery voltage, internal temperature, and vibration levels. Used to monitor tool health and prevent failures.
* **Pump Pressure & Flow Rate:** Essential for confirming the tool is pulsing correctly. Changes in pressure can indicate tool or pump issues.

---

### 7.5 Data Flow & Rig Integration
MWD data is shared with other rig systems:
* **Rig Floor Display:** Provides the driller and directional driller with real time surveys and toolface. Essential for steering the well.
* **WITS & WITSML:** Standard protocols for sharing data between different service companies. Allows MWD data to be integrated into the rig's main data log.
* **Remote Monitoring:** Real time data is often transmitted to town for expert analysis. Supports geosteering and operational decision making.

---

### 7.6 Operational Best Practices
To ensure reliable surface operations:
* **Regularly inspect** and calibrate pressure transducers
* **Monitor signal quality** and adjust filters as needed
* **Maintain clear communication** with the driller regarding pump changes
* **Verify** that real time data matches memory data after the run
* **Document** all decoding issues and troubleshooting steps`,
    quizQuestions: [
      {
        id: 's7q1',
        question: 'What is the primary function of the MWD surface system?',
        options: ['Generate mud pulses', 'Decode telemetry and display data', 'Drill the wellbore', 'Mix drilling mud'],
        correctAnswerIndex: 1,
        explanation: 'The surface system detects, decodes, and displays data transmitted from the downhole tool.'
      },
      {
        id: 's7q2',
        question: 'Which sensor is the primary tool for detecting mud pulse signals?',
        options: ['Gamma detector', 'Accelerometer', 'Standpipe Pressure Transducer (SPT)', 'Magnetometer'],
        correctAnswerIndex: 2,
        explanation: 'The SPT measures pressure fluctuations in the standpipe, which are used to detect mud pulses.'
      },
      {
        id: 's7q3',
        question: 'What is the purpose of surface filters and dampeners in a mud pulse system?',
        options: ['Increase pump pressure', 'Remove pump noise and improve signal quality', 'Cool the drilling mud', 'Lubricate the drill bit'],
        correctAnswerIndex: 1,
        explanation: 'Filters and dampeners remove pressure spikes and noise from the pumps, improving the signal-to-noise ratio.'
      },
      {
        id: 's7q4',
        question: 'Why must signal cables be shielded in an MWD system?',
        options: ['To prevent mud leaks', 'To prevent electrical interference', 'To increase cable strength', 'To improve heat resistance'],
        correctAnswerIndex: 1,
        explanation: 'Shielding protects the signal from electromagnetic interference on the rig.'
      },
      {
        id: 's7q5',
        question: 'What does "filtering" do in MWD signal processing?',
        options: ['Removes solids from the mud', 'Isolates the pulse frequency by removing noise', 'Increases the amplitude of the pulses', 'Changes the pulse width'],
        correctAnswerIndex: 1,
        explanation: 'Digital filters remove unwanted noise (like pump harmonics) to isolate the telemetry signal.'
      },
      {
        id: 's7q6',
        question: 'What is "thresholding" in the context of MWD decoding?',
        options: ['Measuring the depth of the well', 'Identifying pulses based on amplitude and duration', 'Setting the maximum ROP', 'Limiting the pump pressure'],
        correctAnswerIndex: 1,
        explanation: 'Thresholding determines what qualifies as a pulse based on its size and timing.'
      },
      {
        id: 's7q7',
        question: 'How are pulse sequences converted into engineering units like inclination?',
        options: ['Manual calculation', 'Decoding binary data', 'Measuring mud weight', 'Checking the bit size'],
        correctAnswerIndex: 1,
        explanation: 'The surface computer decodes binary pulse sequences into meaningful data.'
      },
      {
        id: 's7q8',
        question: 'What is the purpose of parity bits and checksums in MWD telemetry?',
        options: ['Increase data transmission speed', 'Verify data integrity and check for errors', 'Measure tool vibration', 'Calibrate the gamma sensor'],
        correctAnswerIndex: 1,
        explanation: 'These error-checking methods ensure that the decoded data is accurate.'
      },
      {
        id: 's7q9',
        question: 'Which real-time data stream is most critical for tracking the wellbore path?',
        options: ['Gamma ray', 'Surveys (Inc, Az, TF)', 'Battery voltage', 'Internal temperature'],
        correctAnswerIndex: 1,
        explanation: 'Surveys provide the directional information needed to track the well\'s position.'
      },
      {
        id: 's7q10',
        question: 'Why is monitoring tool diagnostics like battery voltage important?',
        options: ['To increase ROP', 'To monitor tool health and prevent failures', 'To improve gamma resolution', 'To reduce pump noise'],
        correctAnswerIndex: 1,
        explanation: 'Diagnostics help operators identify potential issues before they lead to tool failure.'
      },
      {
        id: 's7q11',
        question: 'What is WITS or WITSML used for on a rig?',
        options: ['Mixing mud chemicals', 'Standardized data sharing between service companies', 'Powering the MWD tool', 'Cooling the top drive'],
        correctAnswerIndex: 1,
        explanation: 'WITS/WITSML are industry standards for transmitting and sharing rig data.'
      },
      {
        id: 's7q12',
        question: 'Who is the primary user of real-time MWD surveys on the rig floor?',
        options: ['The cook', 'The directional driller', 'The derrickman', 'The welder'],
        correctAnswerIndex: 1,
        explanation: 'Directional drillers use real-time surveys to steer the well according to the plan.'
      },
      {
        id: 's7q13',
        question: 'What can a sudden change in standpipe pressure indicate?',
        options: ['Formation change', 'Tool or pump issues', 'Change in bit weight', 'Higher gamma readings'],
        correctAnswerIndex: 1,
        explanation: 'Pressure changes often signal problems with the MWD tool or the rig\'s pumping system.'
      },
      {
        id: 's7q14',
        question: 'Why is it important to verify real-time data against memory data?',
        options: ['To increase drilling speed', 'To ensure data accuracy and identify decoding errors', 'To save battery power', 'To reduce mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Comparing real-time and memory data confirms that the telemetry was decoded correctly.'
      },
      {
        id: 's7q15',
        question: 'What is the "Signal-to-Noise Ratio" (SNR)?',
        options: ['The ratio of mud weight to flow rate', 'The strength of the signal relative to background noise', 'The speed of the pulses', 'The depth of the tool'],
        correctAnswerIndex: 1,
        explanation: 'A high SNR is essential for reliable decoding; it means the signal is much stronger than the noise.'
      },
      {
        id: 's7q16',
        question: 'Which component connects the pressure transducer to the surface computer?',
        options: ['Drill pipe', 'Signal cable', 'Mud hose', 'Kelly hose'],
        correctAnswerIndex: 1,
        explanation: 'Signal cables transmit the raw data from the sensors to the processing unit.'
      },
      {
        id: 's7q17',
        question: 'What happens to invalid data that fails a checksum test?',
        options: ['It is automatically corrected', 'It is flagged or discarded', 'It is sent to the driller anyway', 'It increases the ROP'],
        correctAnswerIndex: 1,
        explanation: 'Error-checking protocols discard corrupted data to prevent incorrect decisions.'
      },
      {
        id: 's7q18',
        question: 'Which diagnostic value helps monitor the risk of electronic failure due to heat?',
        options: ['Battery voltage', 'Internal temperature', 'Vibration level', 'Gamma API'],
        correctAnswerIndex: 1,
        explanation: 'High internal temperatures can damage sensitive MWD electronics.'
      },
      {
        id: 's7q19',
        question: 'What is the primary benefit of remote monitoring (Real-Time Operations Centers)?',
        options: ['Reducing rig crew size', 'Providing expert support and geosteering analysis', 'Increasing mud flow', 'Lowering fuel costs'],
        correctAnswerIndex: 1,
        explanation: 'RTOCs allow experts in town to support rig operations with advanced analysis.'
      },
      {
        id: 's7q20',
        question: 'How does a flowline pressure transducer support MWD operations?',
        options: ['It measures bit torque', 'It provides a secondary signal for pulse confirmation', 'It cools the mud', 'It measures ROP'],
        correctAnswerIndex: 1,
        explanation: 'A secondary transducer helps confirm signals when the primary one is noisy.'
      },
      {
        id: 's7q21',
        question: 'What is the most common cause of "pump noise" in MWD signals?',
        options: ['Formation hardness', 'Piston strokes and valve action in mud pumps', 'High ROP', 'Tool rotation'],
        correctAnswerIndex: 1,
        explanation: 'Mud pumps create rhythmic pressure fluctuations that can interfere with MWD pulses.'
      },
      {
        id: 's7q22',
        question: 'Which digital filter is used to remove low-frequency noise from the signal?',
        options: ['Low-pass filter', 'High-pass filter', 'Band-stop filter', 'Amplifier'],
        correctAnswerIndex: 1,
        explanation: 'High-pass filters allow high-frequency pulses through while blocking low-frequency noise.'
      },
      {
        id: 's7q23',
        question: 'What should an MWD operator do if the signal quality degrades?',
        options: ['Increase ROP', 'Adjust surface filters and check transducers', 'Stop the pumps immediately', 'Change the bit'],
        correctAnswerIndex: 1,
        explanation: 'Troubleshooting signal issues involves checking hardware and optimizing software filters.'
      },
      {
        id: 's7q24',
        question: 'What is the purpose of the "Rig Floor Display"?',
        options: ['Watching movies', 'Providing real-time data to the driller', 'Monitoring weather', 'Controlling mud weight'],
        correctAnswerIndex: 1,
        explanation: 'The display gives the driller the critical information needed to steer and drill safely.'
      },
      {
        id: 's7q25',
        question: 'Which protocol is the modern, XML-based standard for rig data?',
        options: ['WITS', 'WITSML', 'HTTP', 'FTP'],
        correctAnswerIndex: 1,
        explanation: 'WITSML is the evolved, web-compatible version of the older WITS standard.'
      },
      {
        id: 's7q26',
        question: 'What does a "parity error" indicate in MWD telemetry?',
        options: ['High vibration', 'A data bit was flipped during transmission', 'Low battery', 'High temperature'],
        correctAnswerIndex: 1,
        explanation: 'Parity checks detect single-bit errors in the transmitted data.'
      },
      {
        id: 's7q27',
        question: 'Why is "Gamma Ray" data transmitted in real-time?',
        options: ['To measure bit wear', 'For lithology correlation and geosteering', 'To check mud density', 'To monitor pump pressure'],
        correctAnswerIndex: 1,
        explanation: 'Real-time gamma is essential for identifying formations and staying within the reservoir.'
      },
      {
        id: 's7q28',
        question: 'What is the effect of high mud weight on mud pulse telemetry?',
        options: ['Increases signal speed', 'Can attenuate (weaken) the signal', 'Improves battery life', 'Reduces vibration'],
        correctAnswerIndex: 1,
        explanation: 'Dense or thick mud can absorb pulse energy, making signals harder to detect.'
      },
      {
        id: 's7q29',
        question: 'Which diagnostic helps identify if the tool is being damaged by rough drilling?',
        options: ['Battery voltage', 'Vibration levels (G-RMS)', 'Internal temperature', 'Gamma API'],
        correctAnswerIndex: 1,
        explanation: 'Monitoring vibration helps operators advise the driller to change parameters to protect the tool.'
      },
      {
        id: 's7q30',
        question: 'What should be documented regarding decoding issues?',
        options: ['The driller\'s name', 'The symptoms, root cause, and steps taken to fix it', 'The cost of the mud', 'The weather conditions'],
        correctAnswerIndex: 1,
        explanation: 'Detailed troubleshooting logs are essential for improving reliability and reporting.'
      },
      {
        id: 's7q31',
        question: 'What is the primary purpose of a Standpipe Pressure Transducer (SPT)?',
        options: ['Measure mud weight', 'Detect pressure pulses from the MWD tool', 'Monitor bit torque', 'Control pump speed'],
        correctAnswerIndex: 1,
        explanation: 'The SPT is the primary sensor for capturing mud pulse telemetry signals.'
      },
      {
        id: 's7q32',
        question: 'Which component is responsible for converting raw pressure signals into binary data?',
        options: ['The pulser', 'The surface computer', 'The mud pump', 'The drill bit'],
        correctAnswerIndex: 1,
        explanation: 'The surface computer runs software that filters and decodes the signal.'
      },
      {
        id: 's7q33',
        question: 'What is the "noise floor" in MWD signal processing?',
        options: ['The bottom of the mud pit', 'The level of background pressure fluctuations', 'The maximum depth of the well', 'The weight of the drill string'],
        correctAnswerIndex: 1,
        explanation: 'The noise floor is the background noise that the signal must overcome to be decoded.'
      },
      {
        id: 's7q34',
        question: 'Why is "Toolface" data critical for directional drilling?',
        options: ['It measures formation hardness', 'It shows the orientation of the motor or RSS', 'It tracks battery life', 'It measures mud flow'],
        correctAnswerIndex: 1,
        explanation: 'Toolface tells the driller which way the bit is pointing while steering.'
      },
      {
        id: 's7q35',
        question: 'What is the benefit of using multiple pressure transducers?',
        options: ['Reduces mud cost', 'Provides redundancy and signal validation', 'Increases ROP', 'Cools the electronics'],
        correctAnswerIndex: 1,
        explanation: 'Multiple sensors allow for "noise cancellation" and better signal detection.'
      },
      {
        id: 's7q36',
        question: 'Which factor most affects the speed of data transmission (baud rate)?',
        options: ['Mud weight', 'Telemetry method and pulse width', 'Bit size', 'Rig height'],
        correctAnswerIndex: 1,
        explanation: 'The telemetry configuration (e.g., pulse width) determines how much data can be sent per second.'
      },
      {
        id: 's7q37',
        question: 'What does "attenuation" mean in the context of MWD signals?',
        options: ['Signal strengthening', 'Signal weakening over distance', 'Signal frequency change', 'Signal encryption'],
        correctAnswerIndex: 1,
        explanation: 'As pulses travel up the wellbore, they lose energy and become weaker (attenuate).'
      },
      {
        id: 's7q38',
        question: 'Which rig system typically provides the "Depth" data to the MWD system?',
        options: ['The mud logger', 'The rig\'s electronic data recorder (EDR)', 'The cementer', 'The geologist'],
        correctAnswerIndex: 1,
        explanation: 'The EDR tracks the block position and provides depth data to the MWD computer.'
      },
      {
        id: 's7q39',
        question: 'What is a "False Trigger" in MWD decoding?',
        options: ['A successful survey', 'Noise being incorrectly identified as a pulse', 'A battery failure', 'A pump shutdown'],
        correctAnswerIndex: 1,
        explanation: 'False triggers occur when noise spikes are mistaken for data pulses.'
      },
      {
        id: 's7q40',
        question: 'How does high ROP affect real-time gamma ray resolution?',
        options: ['Increases resolution', 'Decreases resolution (fewer data points per foot)', 'Has no effect', 'Changes the API values'],
        correctAnswerIndex: 1,
        explanation: 'Faster drilling means the tool moves further between data transmissions, reducing spatial resolution.'
      },
      {
        id: 's7q41',
        question: 'What is the primary role of the MWD Operator during drilling?',
        options: ['Operating the drawworks', 'Monitoring and validating real-time data', 'Mixing mud', 'Welding casing'],
        correctAnswerIndex: 1,
        explanation: 'The MWD operator ensures the tool is working and the data is accurate.'
      },
      {
        id: 's7q42',
        question: 'Which diagnostic confirms the MWD tool is receiving enough flow to operate?',
        options: ['Battery voltage', 'Internal flow switch or pressure sensor', 'Gamma API', 'Inclination'],
        correctAnswerIndex: 1,
        explanation: 'Tools often have internal sensors to confirm they are in "drilling mode" based on flow.'
      },
      {
        id: 's7q43',
        question: 'What is the "Nyquist Frequency" relevant to in MWD?',
        options: ['Mud weight', 'Sampling theory and data resolution', 'Tool length', 'Pump pressure'],
        correctAnswerIndex: 1,
        explanation: 'It relates to how often data must be sampled to accurately represent the signal.'
      },
      {
        id: 's7q44',
        question: 'Why is "Azimuth" data important?',
        options: ['It measures vertical depth', 'It shows the compass direction of the wellbore', 'It tracks temperature', 'It measures formation density'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth provides the horizontal direction (North, South, East, West) of the well.'
      },
      {
        id: 's7q45',
        question: 'What is the final step in a successful MWD survey?',
        options: ['Changing the bit', 'Transmitting and validating the data at surface', 'Increasing pump speed', 'Shutting down the rig'],
        correctAnswerIndex: 1,
        explanation: 'A survey is only complete once it is successfully received, decoded, and verified at the surface.'
      }
    ]
  },
  {
    id: 'section-8',
    title: 'Rig Operations, Safety, & MWD Workflow',
    content: `This section teaches the practical, operational side of being an MWD hand on location. It covers rig procedures, safety expectations, job workflow, communication, and the daily responsibilities that keep the operation running smoothly. This is the “real world” section — the part that prepares a trainee to actually work on a rig.

> **Key Idea:** On a rig, your reputation is built on safety, accuracy, and clear communication.

---

### 8.1 Rig Safety Fundamentals
MWD personnel must follow all rig safety rules, including:
* **PPE requirements**
* **Hazard awareness**
* **Lockout/tagout (LOTO)**
* **Confined space rules**
* **Fall protection**
* **Hot work restrictions**

MWD hands must also understand:
* **Red zones**
* **Pinch points**
* **High pressure lines**
* **Trip hazards**
* **Chemical exposure**

Safety is the first priority on every rig.

---

### 8.2 Rig Hierarchy & Communication
Key personnel:
* **Company man** (OIM / superintendent)
* **Driller**
* **Directional driller**
* **MWD operator**
* **Mud engineer**
* **Floorhands**
* **Toolpusher**

MWD must communicate clearly and professionally with all of them.

---

### 8.3 MWD Rig Up Procedures
MWD rig up includes:
* **Installing** surface sensors
* **Running** cables safely
* **Setting up** the MWD shack
* **Grounding** equipment (especially EM)
* **Connecting** to rig network
* **Testing** telemetry
* **Verifying** data flow

Proper rig up prevents downtime and safety hazards.

---

### 8.4 Pre Run Tool Preparation
Before running the tool:
* **Assemble** BHA components
* **Install** batteries or turbine modules
* **Program** the tool
* **Perform** function tests
* **Verify** sensors
* **Check** pulser operation
* **Document** serial numbers
* **Complete** pre run QA/QC

This ensures the tool is ready for downhole conditions.

---

### 8.5 Running the Tool in Hole
MWD responsibilities during RIH:
* **Monitor** tool power
* **Watch** for tool resets
* **Confirm** pulses at surface
* **Verify** gamma response
* **Communicate** with DD and driller
* **Log** depth and events

Early detection of issues prevents costly trips.

---

### 8.6 Drilling Operations & Real Time Monitoring
During drilling, MWD must:
* **Monitor** surveys
* **Track** toolface
* **Watch** gamma trends
* **QC** every survey
* **Monitor** SNR and pulse quality
* **Track** temperature and vibration
* **Communicate** changes immediately

This is the core of the MWD job.

---

### 8.7 Connection Procedures
During connections:
* **Monitor** pumps off behavior
* **Watch** for tool resets
* **Confirm** pulses return after pumps on
* **Validate** toolface stability
* **Log** connection times

Connections are high risk moments for telemetry issues.

---

### 8.8 Trip Procedures
During trips:
* **Monitor** tool power
* **Watch** for temperature changes
* **Log** depth and events
* **Prepare** for surveys at TD
* **Communicate** with DD and company man

Trips are critical for tool health and data integrity.

---

### 8.9 End of Run Procedures
After pulling out of hole:
* **Download** memory data
* **Perform** post run QA/QC
* **Inspect** pulser and sensors
* **Document** failures
* **Prepare** end of run report
* **Package** tool for shipping

This data is essential for engineering and reliability.

---

### 8.10 MWD Daily Reporting
MWD operators must complete:
* **Daily activity reports**
* **Survey reports**
* **Toolface reports**
* **Gamma logs**
* **BHA reports**
* **Failure reports**
* **End of run summaries**

Accurate reporting is a core part of the job.

---

### 8.11 Rig Etiquette & Professionalism
MWD personnel must:
* **Respect** rig hierarchy
* **Communicate** clearly
* **Maintain** a clean workspace
* **Be proactive** in identifying problems
* **Support** the rig team in achieving goals

---

### 8.12 Why This Section Matters
This section prepares trainees for:
* **Real world rig operations**
* **Safe and efficient workflow**
* **Professional communication**
* **Accurate reporting**
* **Reliable tool operation**

This is the section that turns knowledge into competence.`,
    quizQuestions: [
      {
        id: 's8q1',
        question: 'Which of the following is mandatory PPE on most drilling rigs?',
        options: ['Safety glasses, hard hat, FR clothing, steel toe boots', 'Sunglasses and gloves only', 'Hard hat and shorts', 'FR shirt only'],
        correctAnswerIndex: 0,
        explanation: 'Standard rig PPE includes eye protection, hard hat, flame resistant clothing, and steel toe boots.'
      },
      {
        id: 's8q2',
        question: 'Who is the highest authority on the rig site?',
        options: ['Directional driller', 'Driller', 'Company man', 'MWD operator'],
        correctAnswerIndex: 2,
        explanation: 'The company man (or OIM) has ultimate authority over rig operations.'
      },
      {
        id: 's8q3',
        question: 'Which task is part of MWD rig up?',
        options: ['Installing surface pressure transducers', 'Mixing mud', 'Running casing', 'Setting slips'],
        correctAnswerIndex: 0,
        explanation: 'MWD rig up includes installing and calibrating surface sensors.'
      },
      {
        id: 's8q4',
        question: 'Which step must be completed before running the MWD tool in hole?',
        options: ['Running casing', 'Pre run QA/QC and function tests', 'Pumping cement', 'Setting slips'],
        correctAnswerIndex: 1,
        explanation: 'Pre run QA/QC ensures the tool is functioning correctly before going downhole.'
      },
      {
        id: 's8q5',
        question: 'Which parameter must be monitored during run in hole (RIH)?',
        options: ['Gamma ray only', 'Tool power and resets', 'WOB', 'Mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Tool power stability is critical during RIH to detect early failures.'
      },
      {
        id: 's8q6',
        question: 'What is the MWD operator’s primary responsibility during drilling?',
        options: ['Mixing mud', 'Monitoring real time surveys and toolface', 'Operating the drawworks', 'Running casing'],
        correctAnswerIndex: 1,
        explanation: 'MWD must monitor surveys, toolface, gamma, and telemetry continuously.'
      },
      {
        id: 's8q7',
        question: 'What should the MWD operator check immediately after pumps are turned back on during a connection?',
        options: ['Gamma ray lag', 'Pulse return and toolface stability', 'WOB', 'Mud weight'],
        correctAnswerIndex: 1,
        explanation: 'After pumps on, pulses must return and toolface must stabilize.'
      },
      {
        id: 's8q8',
        question: 'Which condition is most likely to cause a tool reset during a connection?',
        options: ['High gamma ray counts', 'Sudden temperature change', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Temperature swings during pumps off/pumps on can cause tool resets.'
      },
      {
        id: 's8q9',
        question: 'Which task is part of trip procedures?',
        options: ['Monitoring tool temperature', 'Running casing', 'Mixing mud', 'Setting slips'],
        correctAnswerIndex: 0,
        explanation: 'Temperature changes during trips can indicate tool issues.'
      },
      {
        id: 's8q10',
        question: 'What must be done immediately after pulling the tool out of hole?',
        options: ['Pump cement', 'Download memory data', 'Run casing', 'Mix mud'],
        correctAnswerIndex: 1,
        explanation: 'Memory data must be downloaded before the tool cools or is disassembled.'
      },
      {
        id: 's8q11',
        question: 'Which report is the MWD operator responsible for?',
        options: ['Cementing report', 'Daily activity report', 'Mud weight report', 'Casing tally'],
        correctAnswerIndex: 1,
        explanation: 'MWD operators complete daily activity and survey reports.'
      },
      {
        id: 's8q12',
        question: 'Which behavior is expected of MWD personnel on the rig?',
        options: ['Sleeping during drilling', 'Keeping the shack clean and staying alert', 'Ignoring rig hierarchy', 'Using personal devices constantly'],
        correctAnswerIndex: 1,
        explanation: 'Professionalism and alertness are essential.'
      },
      {
        id: 's8q13',
        question: 'Which rig role does the MWD operator communicate with most frequently?',
        options: ['Mud engineer', 'Directional driller', 'Toolpusher', 'Floorhand'],
        correctAnswerIndex: 1,
        explanation: 'The DD relies on MWD data for steering decisions.'
      },
      {
        id: 's8q14',
        question: 'Which step is part of end of run procedures?',
        options: ['Running casing', 'Inspecting pulser and sensors', 'Mixing mud', 'Setting slips'],
        correctAnswerIndex: 1,
        explanation: 'Post run inspection helps identify failures and wear.'
      },
      {
        id: 's8q15',
        question: 'Why is accurate daily reporting important?',
        options: ['It increases ROP', 'It provides engineering and reliability data', 'It reduces mud costs', 'It improves gamma resolution'],
        correctAnswerIndex: 1,
        explanation: 'Reports support engineering analysis and tool reliability tracking.'
      },
      {
        id: 's8q16',
        question: 'Which rig role is responsible for operating the drawworks and controlling the drill string?',
        options: ['MWD operator', 'Driller', 'Mud engineer', 'Company man'],
        correctAnswerIndex: 1,
        explanation: 'The driller operates the rig equipment and controls the drill string.'
      },
      {
        id: 's8q17',
        question: 'Which action must the MWD operator take before routing any cables across the rig floor?',
        options: ['Ask the mud engineer for permission', 'Notify the driller and ensure safe cable routing', 'Tape cables directly to the floor', 'Run cables without notifying anyone'],
        correctAnswerIndex: 1,
        explanation: 'Cables must be routed safely and communicated to avoid trip hazards and equipment damage.'
      },
      {
        id: 's8q18',
        question: 'Which step is essential when grounding EM telemetry equipment?',
        options: ['Connecting to the rig’s electrical panel', 'Installing ground stakes in conductive soil', 'Attaching to the standpipe', 'Grounding to the BHA'],
        correctAnswerIndex: 1,
        explanation: 'EM systems require proper grounding through ground stakes to reduce noise and improve signal quality.'
      },
      {
        id: 's8q19',
        question: 'Which condition is most likely to cause a tool reset during run in hole (RIH)?',
        options: ['High gamma ray counts', 'Sudden temperature changes', 'High inclination', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Temperature swings during RIH can cause electronics to reset.'
      },
      {
        id: 's8q20',
        question: 'Which task is part of pre run QA/QC?',
        options: ['Mixing mud', 'Verifying pulser operation', 'Running casing', 'Setting slips'],
        correctAnswerIndex: 1,
        explanation: 'Pulser function tests are a critical part of pre run QA/QC.'
      },
      {
        id: 's8q21',
        question: 'Which condition is most likely when pulses disappear immediately after a connection?',
        options: ['High gamma ray counts', 'Tool reset during pumps off', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Pumps off temperature changes often cause tool resets, temporarily stopping pulses.'
      },
      {
        id: 's8q22',
        question: 'Which action should the MWD operator take if toolface becomes unstable during sliding?',
        options: ['Ignore it', 'Notify the directional driller immediately', 'Increase WOB', 'Reduce gamma smoothing'],
        correctAnswerIndex: 1,
        explanation: 'Toolface instability affects steering and must be communicated immediately.'
      },
      {
        id: 's8q23',
        question: 'Which step is part of proper MWD shack setup?',
        options: ['Running cables through walkways', 'Ensuring clean power and stable grounding', 'Leaving equipment unorganized', 'Keeping the shack door open at all times'],
        correctAnswerIndex: 1,
        explanation: 'Clean power and grounding prevent electrical noise and equipment failures.'
      },
      {
        id: 's8q24',
        question: 'Which condition is most likely when the MWD operator notices repeated tool resets during drilling?',
        options: ['High gamma ray counts', 'Power instability or overheating', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Resets typically indicate power issues or thermal stress.'
      },
      {
        id: 's8q25',
        question: 'Which task must be completed during every connection?',
        options: ['Running casing', 'Checking for pulse return after pumps on', 'Mixing mud', 'Adjusting WOB'],
        correctAnswerIndex: 1,
        explanation: 'Confirming pulse return ensures telemetry is functioning after pumps off.'
      },
      {
        id: 's8q26',
        question: 'Which condition is most likely when gamma ray stops updating but surveys continue normally?',
        options: ['Pulser failure', 'Gamma detector or electronics issue', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'If surveys continue but gamma freezes, the gamma subsystem is malfunctioning.'
      },
      {
        id: 's8q27',
        question: 'Which step is required before sending surveys to the directional driller?',
        options: ['Running casing', 'Survey QC', 'Adjusting flow rate', 'Mixing mud'],
        correctAnswerIndex: 1,
        explanation: 'Surveys must be QC’d before being used for steering decisions.'
      },
      {
        id: 's8q28',
        question: 'Which task is part of end of run procedures?',
        options: ['Pumping cement', 'Inspecting pulser components for wear', 'Running casing', 'Mixing mud'],
        correctAnswerIndex: 1,
        explanation: 'Post run inspection identifies wear, failures, and maintenance needs.'
      },
      {
        id: 's8q29',
        question: 'Which behavior is expected of MWD personnel during drilling operations?',
        options: ['Leaving the shack unattended', 'Staying alert and monitoring data continuously', 'Sleeping between surveys', 'Ignoring rig communications'],
        correctAnswerIndex: 1,
        explanation: 'Continuous monitoring is essential for safe and accurate operations.'
      },
      {
        id: 's8q30',
        question: 'Which condition is most likely when the MWD operator sees temperature rising rapidly during drilling?',
        options: ['High gamma ray counts', 'Downhole circulation issues or tool overheating', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Rapid temperature rise indicates circulation problems or tool overheating, requiring immediate attention.'
      },
      {
        id: 's8q31',
        question: 'Which action should the MWD operator take if a surface cable becomes a trip hazard?',
        options: ['Ignore it unless someone complains', 'Tape it down or reroute it immediately', 'Ask the driller to fix it', 'Remove the cable entirely'],
        correctAnswerIndex: 1,
        explanation: 'Cables must be secured or rerouted to eliminate trip hazards and maintain rig safety.'
      },
      {
        id: 's8q32',
        question: 'Which condition is most likely when the MWD shack loses power during drilling?',
        options: ['High gamma ray counts', 'Rig generator or breaker issue', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Shack power loss is usually caused by generator fluctuations or tripped breakers.'
      },
      {
        id: 's8q33',
        question: 'Which step must be taken before entering any red zone area on the rig floor?',
        options: ['Notify the directional driller', 'Obtain permission from the driller', 'Ask the mud engineer', 'Enter quickly to avoid delays'],
        correctAnswerIndex: 1,
        explanation: 'The driller controls the rig floor and must authorize entry into red zone areas.'
      },
      {
        id: 's8q34',
        question: 'Which condition is most likely when the MWD operator notices the pulser temperature rising rapidly during drilling?',
        options: ['High gamma ray counts', 'Poor mud cooling or circulation issues', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Poor circulation or mud cooling can cause pulser overheating.'
      },
      {
        id: 's8q35',
        question: 'Which task is part of proper MWD rig down procedures?',
        options: ['Leaving cables in place for the next crew', 'Removing and coiling all cables safely', 'Pumping cement', 'Running casing'],
        correctAnswerIndex: 1,
        explanation: 'Rig down includes removing all equipment and cables safely and cleanly.'
      },
      {
        id: 's8q36',
        question: 'Which behavior is expected when communicating with the company man?',
        options: ['Using casual or unprofessional language', 'Providing clear, concise, factual updates', 'Avoiding communication unless asked', 'Giving opinions without data'],
        correctAnswerIndex: 1,
        explanation: 'Communication with the company man must be professional and data driven.'
      },
      {
        id: 's8q37',
        question: 'Which condition is most likely when the MWD operator sees repeated toolface jumps during sliding?',
        options: ['High gamma ray counts', 'Motor stalls or vibration', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Toolface jumps during sliding usually indicate vibration or motor stalls.'
      },
      {
        id: 's8q38',
        question: 'Which step must be taken before routing cables through high traffic areas?',
        options: ['Run cables quickly to avoid delays', 'Notify the driller and secure the route', 'Ask the mud engineer', 'Leave cables loose for flexibility'],
        correctAnswerIndex: 1,
        explanation: 'The driller must approve cable routing to avoid hazards.'
      },
      {
        id: 's8q39',
        question: 'Which condition is most likely when the MWD operator sees sudden temperature drops during a trip out of hole?',
        options: ['Tool cooling as it exits the formation', 'Gamma detector failure', 'Pulser malfunction', 'High inclination'],
        correctAnswerIndex: 0,
        explanation: 'Temperature drops during trips are normal as the tool moves into cooler sections of the well.'
      },
      {
        id: 's8q40',
        question: 'Which task is part of the MWD operator’s responsibilities during drilling?',
        options: ['Operating the drawworks', 'Monitoring SNR and pulse quality', 'Mixing mud', 'Running casing'],
        correctAnswerIndex: 1,
        explanation: 'Monitoring telemetry quality is a core MWD responsibility.'
      },
      {
        id: 's8q41',
        question: 'Which condition is most likely when the MWD operator sees no gamma updates but surveys continue normally?',
        options: ['High inclination', 'Gamma detector or electronics failure', 'Low mud weight', 'High WOB'],
        correctAnswerIndex: 1,
        explanation: 'If surveys continue but gamma freezes, the gamma subsystem has failed.'
      },
      {
        id: 's8q42',
        question: 'Which step must be taken before downloading memory data after pulling out of hole?',
        options: ['Allow the tool to cool completely', 'Keep the tool powered and stable', 'Run casing', 'Mix mud'],
        correctAnswerIndex: 1,
        explanation: 'Memory data must be downloaded while the tool is still powered and stable.'
      },
      {
        id: 's8q43',
        question: 'Which behavior is expected of MWD personnel during high risk operations like tripping or BHA changes?',
        options: ['Leaving the shack unattended', 'Staying alert and ready to respond', 'Sleeping between surveys', 'Ignoring rig communications'],
        correctAnswerIndex: 1,
        explanation: 'High risk operations require full attention and readiness.'
      },
      {
        id: 's8q44',
        question: 'Which condition is most likely when the MWD operator notices repeated tool resets only during pumps off?',
        options: ['High gamma ray counts', 'Temperature swings during pumps off', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Pumps off cooling often causes electronics to reset.'
      },
      {
        id: 's8q45',
        question: 'Why is proper rig up and cable management essential for MWD operations?',
        options: ['It increases ROP', 'It prevents safety hazards and equipment damage', 'It improves gamma resolution', 'It reduces mud costs'],
        correctAnswerIndex: 1,
        explanation: 'Proper rig up prevents trip hazards, electrical issues, and equipment failures.'
      }
    ]
  },
  {
    id: 'section-9',
    title: 'MWD Reliability, Failure Modes, & Post Run Analysis',
    content: `This section teaches the trainee how to protect the tool, recognize early warning signs, diagnose failures, and deliver high quality post run data. Reliability is the difference between an MWD hand who “gets by” and one who becomes the driller’s and DD’s first choice.

> **Key Idea:** Reliability isn't just about the tool not breaking; it's about the data being trustworthy from start to finish.

---

### 9.1 What Reliability Means in MWD
MWD reliability is measured by:
* **Tool uptime:** Percentage of time the tool is functioning correctly downhole.
* **Run length:** The total hours or footage a tool can operate before requiring maintenance.
* **Failure frequency:** Mean Time Between Failures (MTBF).
* **Data quality:** Accuracy and resolution of the surveys and logs provided.
* **Ability to complete the well without tripping:** Avoiding Non-Productive Time (NPT).

High reliability reduces NPT, saves the operator money, and builds trust.

---

### 9.2 Categories of MWD Failures
MWD failures fall into three major categories:

#### Mechanical Failures
* **Pulser wear:** Erosion of poppet and orifice.
* **Poppet sticking:** Debris or high solids jamming moving parts.
* **Motor/solenoid failure:** Mechanical breakdown of the drive mechanism.
* **Bearing wear:** Failure of internal bearings in turbine tools.
* **Turbine rotor/stator damage:** Erosion or impact damage.
* **Erosion of moving parts:** High velocity mud flow wearing down components.

#### Electrical Failures
* **Battery depletion:** Running out of power before the end of the run.
* **Power board failure:** Component burnout due to heat or spikes.
* **CPU resets:** Temporary loss of function due to thermal stress.
* **Sensor failures:** Accelerometer or magnetometer drift/failure.
* **Wiring harness damage:** Broken connections due to vibration.
* **Memory corruption:** Data loss in the tool's internal storage.

#### Environmental Failures
* **Over-temperature:** Exceeding the tool's maximum temperature rating.
* **Excessive vibration (Vibe-out):** High-frequency vibration damaging electronics.
* **High G-force shock:** Sudden impacts during drilling or handling.
* **Pressure seal failure:** Fluid ingress leading to short circuits.

---

### 9.3 Early Warning Signs
A proactive MWD operator monitors for:
* **Decreasing pulse amplitude:** Often indicates pulser wear or battery decline.
* **Increasing SNR (Signal-to-Noise Ratio):** The signal is becoming harder to decode.
* **Erratic sensor readings:** Sudden, unexplained jumps in data.
* **Communication timeouts:** Intermittent failures in surface-to-downhole commands.

---

### 9.4 Post Run Analysis
* **Tool retrieval & cleaning:** Inspecting for physical damage.
* **Memory download:** Retrieving high-resolution data from internal storage.
* **Real-time vs. Memory comparison:** Verifying telemetry accuracy.
* **Final Data QC:** Ensuring the final survey set and logs are accurate.`,
    quizQuestions: [
      {
        id: 's9q1',
        question: 'What is the primary goal of high MWD reliability?',
        options: ['To drill faster by increasing RPM', 'To reduce Non-Productive Time (NPT) and save costs', 'To make the tool look more professional', 'To increase the mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High reliability ensures the well can be completed without expensive, unplanned trips (NPT).'
      },
      {
        id: 's9q2',
        question: 'Which of the following is an example of an environmental failure?',
        options: ['Battery depletion', 'Poppet sticking', 'Vibe-out due to excessive vibration', 'Memory corruption'],
        correctAnswerIndex: 2,
        explanation: 'Vibration, heat, and shock are environmental factors that can cause tool failure.'
      },
      {
        id: 's9q3',
        question: 'Why is comparing real-time data to memory data important post-run?',
        options: ['To see if the tool was turned off', 'To verify data quality and ensure the final surveys are accurate', 'To check the rig’s fuel levels', 'To calculate the cost of the mud'],
        correctAnswerIndex: 1,
        explanation: 'Memory data is higher resolution and serves as the final record to verify real-time telemetry.'
      }
    ]
  },
  {
    id: 'section-10',
    title: 'Directional Drilling Fundamentals for MWD',
    content: `This section teaches the MWD operator the essential directional drilling concepts needed to support the DD, understand the well plan, and anticipate operational needs.
The goal is not to turn the trainee into a directional driller — it’s to make them a high value MWD hand who understands the bigger picture.

> **Key Idea:** A great MWD hand is the Directional Driller's best ally, providing the data needed to stay on target.

---

### 10.1 What Directional Drillers Do
Directional drillers are responsible for:
* **Steering** the wellbore
* **Executing** the well plan
* **Managing** toolface and slide/rotate decisions
* **Monitoring** surveys and DLS
* **Staying** within geological targets
* **Communicating** with the rig crew and company man

MWD supports this by delivering accurate, timely, high quality data.

---

### 10.2 The Well Plan
A well plan includes:
* **Kickoff point (KOP)**
* **Build section**
* **Curve section**
* **Lateral section**
* **Target windows**
* **Anti collision rules**
* **Survey intervals**
* **DLS limits**

MWD must understand the plan to anticipate survey needs and QC requirements.

---

### 10.3 Survey Fundamentals for Directional Work
Directional drilling relies on:
* **Inclination**
* **Azimuth**
* **Toolface**
* **Dogleg severity (DLS)**
* **Vertical section**
* **North/East displacement**

MWD provides the data; the DD uses it to steer.

---

### 10.4 Toolface Control
Toolface is used during sliding to control:
* **Build**
* **Drop**
* **Turn left**
* **Turn right**

MWD must monitor toolface stability and communicate issues immediately.

---

### 10.5 Slide vs Rotate Drilling
* **Sliding:** Motor bend engaged. Toolface controls direction. Lower ROP. Higher DLS potential.
* **Rotating:** Motor bend averages out. Wellbore straightens. Higher ROP. Lower DLS.

MWD must understand how each mode affects surveys and toolface.

---

### 10.6 Dogleg Severity (DLS)
DLS measures how quickly the wellbore changes direction.
High DLS can cause:
* **BHA fatigue**
* **Motor stalls**
* **High vibration**
* **Survey errors**
* **Stuck pipe risk**

MWD must QC surveys for DLS anomalies.

---

### 10.7 Anti Collision Principles
MWD must understand:
* **Separation factors**
* **Proximity** to offset wells
* **Survey accuracy** requirements
* **Why** high quality surveys matter

Anti collision is one of the most critical safety responsibilities on the rig.

---

### 10.8 Slide Sheet & Survey Timing
MWD supports the DD by:
* **Delivering** surveys on time
* **Tracking** slide footage
* **Monitoring** toolface
* **Logging** slide/rotate intervals

Good timing = good steering.

---

### 10.9 Directional Drilling Challenges
Common challenges include:
* **Toolface instability**
* **High vibration**
* **Motor stalls**
* **Poor slide efficiency**
* **Formation changes**
* **High DLS**
* **Survey interference**

MWD must recognize these early.

---

### 10.10 Why MWD Must Understand Directional Drilling
A great MWD hand:
* **Anticipates** survey needs
* **Understands** steering decisions
* **Communicates** effectively with the DD
* **Recognizes** directional problems early
* **Provides data** that supports safe, accurate drilling

This section builds that capability.`,
    quizQuestions: [
      {
        id: 's10q1',
        question: 'What is the primary responsibility of the directional driller?',
        options: ['Mixing mud', 'Steering the wellbore according to the well plan', 'Monitoring gamma ray', 'Operating the drawworks'],
        correctAnswerIndex: 1,
        explanation: 'The DD is responsible for steering the well and executing the well plan.'
      },
      {
        id: 's10q2',
        question: 'Which section of the well plan typically contains the highest doglegs?',
        options: ['Vertical section', 'Build or curve section', 'Lateral section', 'Surface hole'],
        correctAnswerIndex: 1,
        explanation: 'The build/curve section requires rapid changes in inclination and azimuth.'
      },
      {
        id: 's10q3',
        question: 'Which parameter is most important for directional control during sliding?',
        options: ['Gamma ray', 'Toolface', 'Temperature', 'Flow rate'],
        correctAnswerIndex: 1,
        explanation: 'Toolface determines the direction of the motor bend during sliding.'
      },
      {
        id: 's10q4',
        question: 'Which drilling mode typically produces higher ROP?',
        options: ['Sliding', 'Rotating', 'Pumping', 'Reaming'],
        correctAnswerIndex: 1,
        explanation: 'Rotating reduces friction and increases ROP.'
      },
      {
        id: 's10q5',
        question: 'What does dogleg severity (DLS) measure?',
        options: ['Mud weight changes', 'Rate of directional change', 'Gamma ray intensity', 'Toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'DLS measures how quickly the wellbore changes direction.'
      },
      {
        id: 's10q6',
        question: 'Which condition is most likely when DLS suddenly spikes between surveys?',
        options: ['High gamma ray counts', 'Survey error or vibration', 'Low mud weight', 'High WOB'],
        correctAnswerIndex: 1,
        explanation: 'Sudden DLS spikes often indicate survey interference or vibration.'
      },
      {
        id: 's10q7',
        question: 'Which part of the well plan defines the point where the well begins deviating from vertical?',
        options: ['TD', 'KOP (Kickoff Point)', 'Lateral entry point', 'Surface casing depth'],
        correctAnswerIndex: 1,
        explanation: 'The KOP is where the well begins building inclination.'
      },
      {
        id: 's10q8',
        question: 'Which directional parameter is used to determine left or right turning?',
        options: ['Inclination', 'Azimuth', 'Toolface', 'Gamma ray'],
        correctAnswerIndex: 2,
        explanation: 'Toolface orientation determines turn direction during sliding.'
      },
      {
        id: 's10q9',
        question: 'Which drilling mode typically produces smoother wellbore profiles?',
        options: ['Sliding', 'Rotating', 'Pumping', 'Reaming'],
        correctAnswerIndex: 1,
        explanation: 'Rotating averages out the motor bend, producing smoother profiles.'
      },
      {
        id: 's10q10',
        question: 'Which condition is most likely when toolface becomes unstable during sliding?',
        options: ['High vibration', 'High gamma ray counts', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 0,
        explanation: 'Vibration destabilizes toolface, especially during sliding.'
      },
      {
        id: 's10q11',
        question: 'Which directional parameter is most important for anti collision monitoring?',
        options: ['Gamma ray', 'Vertical section and azimuth', 'Temperature', 'Flow rate'],
        correctAnswerIndex: 1,
        explanation: 'Vertical section and azimuth determine proximity to offset wells.'
      },
      {
        id: 's10q12',
        question: 'Which section of the well typically requires the most precise steering?',
        options: ['Surface hole', 'Build/curve', 'Lateral', 'Conductor hole'],
        correctAnswerIndex: 2,
        explanation: 'Laterals must stay within tight geological targets.'
      },
      {
        id: 's10q13',
        question: 'Which condition is most likely when slide footage does not match expected directional change?',
        options: ['High gamma ray counts', 'Poor slide efficiency', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Poor slide efficiency reduces directional response.'
      },
      {
        id: 's10q14',
        question: 'Which parameter must the MWD operator deliver quickly to support directional decisions?',
        options: ['Temperature', 'Surveys', 'Gamma smoothing', 'Battery voltage'],
        correctAnswerIndex: 1,
        explanation: 'Timely surveys are essential for steering.'
      },
      {
        id: 's10q15',
        question: 'Why must MWD understand the well plan?',
        options: ['To operate the drawworks', 'To anticipate survey needs and support steering', 'To mix mud', 'To run casing'],
        correctAnswerIndex: 1,
        explanation: 'Understanding the well plan helps MWD deliver the right data at the right time.'
      },
      {
        id: 's10q16',
        question: 'Which condition is most likely when slide footage is high but directional response is low?',
        options: ['High gamma ray counts', 'Poor slide efficiency', 'High mud weight', 'Low inclination'],
        correctAnswerIndex: 1,
        explanation: 'Poor slide efficiency reduces the directional impact of sliding.'
      },
      {
        id: 's10q17',
        question: 'Which parameter determines whether the well is turning left or right during a slide?',
        options: ['Inclination', 'Azimuth', 'Toolface orientation', 'Gamma ray trend'],
        correctAnswerIndex: 2,
        explanation: 'Toolface controls turn direction during sliding.'
      },
      {
        id: 's10q18',
        question: 'Which drilling mode typically produces the straightest wellbore?',
        options: ['Sliding', 'Rotating', 'Pumping', 'Reaming'],
        correctAnswerIndex: 1,
        explanation: 'Rotation averages out the motor bend, producing a straighter wellbore.'
      },
      {
        id: 's10q19',
        question: 'Which condition is most likely when the DD requests surveys more frequently than usual?',
        options: ['High gamma ray counts', 'Tight directional target or approaching a boundary', 'High mud weight', 'Low ROP'],
        correctAnswerIndex: 1,
        explanation: 'Frequent surveys are needed when approaching geological or directional boundaries.'
      },
      {
        id: 's10q20',
        question: 'Which parameter is used to calculate dogleg severity (DLS)?',
        options: ['Temperature', 'Change in inclination and azimuth between surveys', 'Gamma ray difference', 'Toolface stability'],
        correctAnswerIndex: 1,
        explanation: 'DLS is calculated from changes in inclination and azimuth over measured depth.'
      },
      {
        id: 's10q21',
        question: 'Which condition is most likely when DLS is consistently higher than expected during rotation?',
        options: ['High gamma ray counts', 'BHA instability or vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'High DLS during rotation indicates BHA instability or vibration.'
      },
      {
        id: 's10q22',
        question: 'Which part of the well plan typically requires the most aggressive build rates?',
        options: ['Vertical section', 'Curve section', 'Lateral section', 'Surface hole'],
        correctAnswerIndex: 1,
        explanation: 'The curve section requires rapid changes in inclination.'
      },
      {
        id: 's10q23',
        question: 'Which condition is most likely when the DD asks for toolface to be monitored continuously?',
        options: ['Sliding is in progress', 'Rotating is in progress', 'Pumps are off', 'The well is vertical'],
        correctAnswerIndex: 0,
        explanation: 'Toolface matters only during sliding.'
      },
      {
        id: 's10q24',
        question: 'Which directional parameter determines whether the well is building or dropping inclination?',
        options: ['Toolface high side orientation', 'Gamma ray trend', 'Temperature', 'Flow rate'],
        correctAnswerIndex: 0,
        explanation: 'High side toolface controls build/drop during sliding.'
      },
      {
        id: 's10q25',
        question: 'Which condition is most likely when azimuth changes but inclination remains constant?',
        options: ['The well is turning but not building', 'The well is building but not turning', 'The well is dropping', 'The well is vertical'],
        correctAnswerIndex: 0,
        explanation: 'Azimuth change without inclination change indicates a turn.'
      },
      {
        id: 's10q26',
        question: 'Which drilling mode is most likely when toolface is constantly rotating on the screen?',
        options: ['Sliding', 'Rotating', 'Pumping', 'Reaming'],
        correctAnswerIndex: 1,
        explanation: 'During rotation, toolface spins continuously.'
      },
      {
        id: 's10q27',
        question: 'Which condition is most likely when the DD requests a survey immediately after a slide?',
        options: ['To confirm slide efficiency and directional response', 'To check gamma ray lag', 'To verify mud weight', 'To check temperature'],
        correctAnswerIndex: 0,
        explanation: 'Surveys after slides confirm whether the slide achieved the intended directional change.'
      },
      {
        id: 's10q28',
        question: 'Which parameter is most important for anti collision monitoring?',
        options: ['Temperature', 'Vertical section and azimuth', 'Gamma ray', 'Flow rate'],
        correctAnswerIndex: 1,
        explanation: 'Vertical section and azimuth determine proximity to offset wells.'
      },
      {
        id: 's10q29',
        question: 'Which condition is most likely when the DD asks for surveys at shorter intervals in the lateral?',
        options: ['High gamma ray counts', 'Tight geological target or approaching a boundary', 'High mud weight', 'Low ROP'],
        correctAnswerIndex: 1,
        explanation: 'Frequent surveys are needed to stay within tight lateral targets.'
      },
      {
        id: 's10q30',
        question: 'Which condition is most likely when toolface becomes unstable even though the driller is sliding smoothly?',
        options: ['High gamma ray counts', 'Downhole vibration or motor stall', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Toolface instability during sliding is usually caused by vibration or motor issues.'
      },
      {
        id: 's10q31',
        question: 'Which condition is most likely when the DD requests a survey immediately after rotating?',
        options: ['To check gamma ray lag', 'To confirm the wellbore straightened as expected', 'To verify mud weight', 'To check temperature'],
        correctAnswerIndex: 1,
        explanation: 'Rotation should reduce DLS; the DD verifies this with a post rotate survey.'
      },
      {
        id: 's10q32',
        question: 'Which directional parameter is most important for determining whether the well is drifting left or right unintentionally?',
        options: ['Inclination', 'Azimuth trend', 'Temperature', 'Gamma ray'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth drift indicates unintended left/right movement.'
      },
      {
        id: 's10q33',
        question: 'Which condition is most likely when inclination increases even though the DD is rotating?',
        options: ['High gamma ray counts', 'BHA tendency to build', 'Low mud weight', 'High temperature'],
        correctAnswerIndex: 1,
        explanation: 'Some BHAs naturally build inclination even during rotation.'
      },
      {
        id: 's10q34',
        question: 'Which part of the well plan typically has the tightest directional tolerances?',
        options: ['Surface hole', 'Curve section', 'Lateral section', 'Conductor hole'],
        correctAnswerIndex: 2,
        explanation: 'Laterals must stay within narrow geological targets.'
      },
      {
        id: 's10q35',
        question: 'Which condition is most likely when the DD asks for toolface to be held at high side?',
        options: ['Building or dropping inclination', 'Turning left', 'Turning right', 'Checking gamma correlation'],
        correctAnswerIndex: 0,
        explanation: 'High side toolface controls build/drop during sliding.'
      },
      {
        id: 's10q36',
        question: 'Which condition is most likely when the DD requests surveys at very short intervals during the curve?',
        options: ['High gamma ray counts', 'Tight build rate control', 'Low mud weight', 'High temperature'],
        correctAnswerIndex: 1,
        explanation: 'The curve requires precise control of inclination and azimuth.'
      },
      {
        id: 's10q37',
        question: 'Which directional parameter is most important for determining how far the well has moved horizontally?',
        options: ['Temperature', 'North/East displacement', 'Gamma ray', 'Toolface'],
        correctAnswerIndex: 1,
        explanation: 'North/East displacement tracks horizontal movement.'
      },
      {
        id: 's10q38',
        question: 'Which condition is most likely when the DD requests a survey before the normal interval?',
        options: ['Approaching a target boundary', 'Checking mud weight', 'Checking temperature', 'Checking gamma lag'],
        correctAnswerIndex: 0,
        explanation: 'Extra surveys are needed when nearing geological or directional boundaries.'
      },
      {
        id: 's10q39',
        question: 'Which condition is most likely when DLS is lower than expected during a slide?',
        options: ['High gamma ray counts', 'Poor slide efficiency', 'High mud weight', 'Low temperature'],
        correctAnswerIndex: 1,
        explanation: 'Poor slide efficiency reduces directional response.'
      },
      {
        id: 's10q40',
        question: 'Which directional parameter is most important for anti collision calculations?',
        options: ['Temperature', 'Vertical section', 'Gamma ray', 'Flow rate'],
        correctAnswerIndex: 1,
        explanation: 'Vertical section determines lateral spacing relative to offset wells.'
      },
      {
        id: 's10q41',
        question: 'Which condition is most likely when azimuth changes significantly but inclination remains stable?',
        options: ['The well is turning', 'The well is building', 'The well is dropping', 'The well is vertical'],
        correctAnswerIndex: 0,
        explanation: 'Azimuth change without inclination change indicates a turn.'
      },
      {
        id: 's10q42',
        question: 'Which condition is most likely when the DD asks for toolface to be monitored closely during a long slide?',
        options: ['High gamma ray counts', 'Risk of toolface drift due to vibration', 'Low mud weight', 'High temperature'],
        correctAnswerIndex: 1,
        explanation: 'Long slides increase the risk of toolface drift.'
      },
      {
        id: 's10q43',
        question: 'Which condition is most likely when the DD requests a survey immediately after a motor stall?',
        options: ['To check gamma correlation', 'To verify directional impact of the stall', 'To check temperature', 'To check mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Motor stalls can cause unintended directional changes.'
      },
      {
        id: 's10q44',
        question: 'Which condition is most likely when the DD asks for more frequent surveys in the build section?',
        options: ['High gamma ray counts', 'Tight inclination control', 'Low mud weight', 'High temperature'],
        correctAnswerIndex: 1,
        explanation: 'The build section requires precise inclination control.'
      },
      {
        id: 's10q45',
        question: 'Why must MWD understand slide/rotate strategy?',
        options: ['To operate the drawworks', 'To anticipate survey timing and toolface needs', 'To mix mud', 'To run casing'],
        correctAnswerIndex: 1,
        explanation: 'Understanding slide/rotate strategy helps MWD deliver timely surveys and monitor toolface effectively.'
      }
    ]
  },
  {
    id: 'section-11',
    title: 'Drilling Dynamics, Vibration, & Downhole Dysfunction',
    content: `This section teaches the trainee how to interpret drilling dynamics data, recognize harmful vibration patterns, and understand how drilling dysfunctions impact tool reliability, survey quality, and directional performance.

> **Key Idea:** This is one of the most important sections for protecting the tool and supporting the DD.

---

### 11.1 What Are Drilling Dynamics?
Drilling dynamics refers to the mechanical forces acting on the drillstring and BHA, including:
* Axial forces
* Lateral forces
* Torsional forces
* Shock events
* Stick slip
* Whirl

MWD tools often include vibration sensors to monitor these forces.

---

### 11.2 Types of Vibration
**Axial Vibration (Bit Bounce)**
* Up and down motion
* Caused by WOB fluctuations, hard stringers, or poor bit engagement
* Can damage pulser components and bearings

**Lateral Vibration (Whirl)**
* Side to side motion
* Caused by BHA instability, high RPM, or poor hole cleaning
* Causes toolface instability and sensor drift

**Torsional Vibration (Stick Slip)**
* Bit alternates between sticking and spinning rapidly
* Caused by high WOB, low RPM, or formation changes
* Extremely damaging to electronics and motors

---

### 11.3 Stick Slip
Stick slip is one of the most destructive drilling dysfunctions.
Symptoms include:
* RPM oscillations
* Toolface jumps
* Survey noise
* High shock levels
* Motor stalls

MWD must report stick slip immediately.

---

### 11.4 Shock Events
Shock events occur when the BHA experiences sudden impacts.
Causes include:
* Hard stringers
* Bit bounce
* Sudden WOB changes
* Motor stalls
* Reaming in tight spots

Shock damages:
* Sensors
* Bearings
* Pulsers
* Electronics

---

### 11.5 BHA Stability
Stable BHAs produce:
* Smooth toolface
* Predictable DLS
* Clean surveys
* Lower vibration

Unstable BHAs produce:
* Erratic toolface
* High DLS
* Survey noise
* Increased failure risk

MWD must recognize instability early.

---

### 11.6 Drilling Dysfunction Indicators in MWD Data
MWD operators must watch for:
* Toolface jumps
* Sudden DLS spikes
* Survey noise
* High vibration readings
* Temperature spikes
* Pulse distortion

These often indicate drilling dysfunction.

---

### 11.7 How Drilling Dynamics Affect MWD Reliability
High vibration and shock cause:
* Pulser wear
* Sensor drift
* CPU resets
* Memory corruption
* Structural fatigue
* Bearing failure

Understanding drilling dynamics is essential for tool protection.

---

### 11.8 Communication During Dysfunction
MWD must communicate:
* Vibration levels
* Toolface instability
* Survey anomalies
* Stick slip indicators
* Shock events

Clear communication helps the DD adjust drilling parameters.

---

### 11.9 Mitigating Drilling Dysfunction
Common mitigation steps:
* Reduce WOB
* Increase RPM
* Change mud properties
* Adjust flow rate
* Modify BHA design
* Change bit type

MWD doesn’t make these decisions — but must recognize when they’re needed.

---

### 11.10 Why This Section Matters
A great MWD hand:
* Recognizes drilling dysfunction early
* Protects the tool
* Supports directional performance
* Communicates clearly with the DD
* Prevents catastrophic failures

This section builds those skills.`,
    quizQuestions: [
      {
        id: 's11q1',
        question: 'Which type of vibration is characterized by up and down motion of the BHA?',
        options: ['Lateral vibration', 'Axial vibration', 'Torsional vibration', 'Stick slip'],
        correctAnswerIndex: 1,
        explanation: 'Axial vibration is vertical motion, often called bit bounce.'
      },
      {
        id: 's11q2',
        question: 'Which condition is most likely when toolface jumps rapidly during sliding?',
        options: ['High gamma ray counts', 'Lateral vibration or whirl', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration destabilizes toolface.'
      },
      {
        id: 's11q3',
        question: 'Which dysfunction occurs when the bit alternates between sticking and spinning rapidly?',
        options: ['Axial vibration', 'Stick slip', 'Lateral vibration', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip is a torsional dysfunction caused by RPM oscillation.'
      },
      {
        id: 's11q4',
        question: 'Which condition is most likely when surveys show sudden, unrealistic DLS spikes?',
        options: ['High gamma ray counts', 'Vibration or survey interference', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'DLS spikes often indicate vibration or survey noise.'
      },
      {
        id: 's11q5',
        question: 'Which type of vibration is most damaging to electronics?',
        options: ['Axial', 'Lateral', 'Torsional (stick slip)', 'Magnetic'],
        correctAnswerIndex: 2,
        explanation: 'Stick slip produces extreme torsional loads that damage electronics.'
      },
      {
        id: 's11q6',
        question: 'Which condition is most likely when the pulser temperature rises rapidly during drilling?',
        options: ['High gamma ray counts', 'Poor cooling or circulation issues', 'Low inclination', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Poor cooling increases pulser temperature.'
      },
      {
        id: 's11q7',
        question: 'Which dysfunction is most likely when RPM fluctuates wildly on the rig floor?',
        options: ['Axial vibration', 'Stick slip', 'Lateral vibration', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip causes RPM oscillations.'
      },
      {
        id: 's11q8',
        question: 'Which condition is most likely when the MWD vibration channel shows repeated high lateral spikes?',
        options: ['Bit bounce', 'Whirl', 'Stick slip', 'Motor stall'],
        correctAnswerIndex: 1,
        explanation: 'Lateral spikes indicate whirl or lateral vibration.'
      },
      {
        id: 's11q9',
        question: 'Which dysfunction is most likely when the BHA experiences sudden impacts?',
        options: ['Stick slip', 'Shock loading', 'Lateral vibration', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Shock events are caused by sudden impacts.'
      },
      {
        id: 's11q10',
        question: 'Which condition is most likely when toolface becomes unstable even during smooth sliding?',
        options: ['High gamma ray counts', 'Downhole vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Vibration destabilizes toolface.'
      },
      {
        id: 's11q11',
        question: 'Which dysfunction is most likely when surveys show noise or inconsistent readings?',
        options: ['High mud weight', 'Vibration or shock', 'Gamma drift', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Vibration causes survey noise and sensor instability.'
      },
      {
        id: 's11q12',
        question: 'Which condition is most likely when the DD reports poor slide efficiency?',
        options: ['High gamma ray counts', 'Lateral vibration or motor dysfunction', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Vibration reduces slide efficiency.'
      },
      {
        id: 's11q13',
        question: 'Which type of vibration is most likely when the bit bounces off hard stringers?',
        options: ['Axial vibration', 'Lateral vibration', 'Torsional vibration', 'Stick slip'],
        correctAnswerIndex: 0,
        explanation: 'Hard stringers cause axial vibration (bit bounce).'
      },
      {
        id: 's11q14',
        question: 'Which condition is most likely when the MWD tool experiences repeated CPU resets?',
        options: ['High gamma ray counts', 'Shock or torsional vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Shock and torsional vibration destabilize electronics.'
      },
      {
        id: 's11q15',
        question: 'Why must MWD monitor vibration channels continuously?',
        options: ['To improve gamma resolution', 'To detect drilling dysfunction early and protect the tool', 'To adjust mud weight', 'To control ROP'],
        correctAnswerIndex: 1,
        explanation: 'Early detection of vibration prevents tool damage and failures.'
      },
      {
        id: 's11q16',
        question: 'Which condition is most likely when the vibration channel shows high torsional spikes but axial and lateral remain low?',
        options: ['Bit bounce', 'Stick slip', 'Whirl', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Torsional spikes with low axial/lateral vibration indicate stick slip.'
      },
      {
        id: 's11q17',
        question: 'Which dysfunction is most likely when toolface rotates erratically even though the driller is sliding smoothly?',
        options: ['Gamma drift', 'Lateral vibration or whirl', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration destabilizes toolface during sliding.'
      },
      {
        id: 's11q18',
        question: 'Which condition is most likely when surveys show inconsistent inclination readings but azimuth remains stable?',
        options: ['Magnetometer failure', 'Accelerometer instability due to vibration', 'Pulser wear', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Inclination depends on accelerometers, which are sensitive to vibration.'
      },
      {
        id: 's11q19',
        question: 'Which dysfunction is most likely when the BHA experiences repeated sudden impacts?',
        options: ['Stick slip', 'Shock loading', 'Lateral vibration', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Shock events are caused by sudden impacts from formation changes or WOB fluctuations.'
      },
      {
        id: 's11q20',
        question: 'Which condition is most likely when the pulser begins producing distorted pulses during drilling?',
        options: ['High gamma ray counts', 'Vibration or shock affecting pulser mechanics', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Vibration distorts pulse shape by affecting pulser movement.'
      },
      {
        id: 's11q21',
        question: 'Which dysfunction is most likely when the bit alternates between stopping and spinning rapidly?',
        options: ['Axial vibration', 'Stick slip', 'Lateral vibration', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip is defined by RPM oscillation between zero and high speed.'
      },
      {
        id: 's11q22',
        question: 'Which condition is most likely when the MWD tool shows repeated CPU resets during high vibration intervals?',
        options: ['Gamma drift', 'Shock or torsional vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Shock and torsional vibration destabilize electronics and cause resets.'
      },
      {
        id: 's11q23',
        question: 'Which dysfunction is most likely when the vibration channel shows high lateral spikes and toolface becomes unstable?',
        options: ['Bit bounce', 'Whirl', 'Stick slip', 'Motor stall'],
        correctAnswerIndex: 1,
        explanation: 'Lateral spikes indicate whirl, which destabilizes toolface.'
      },
      {
        id: 's11q24',
        question: 'Which condition is most likely when surveys show noise or inconsistent readings only during high RPM?',
        options: ['Gamma drift', 'Lateral vibration or whirl', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'High RPM increases lateral vibration, causing survey noise.'
      },
      {
        id: 's11q25',
        question: 'Which dysfunction is most likely when the BHA vibrates heavily during reaming?',
        options: ['Stick slip', 'Shock loading', 'Lateral vibration', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Reaming in tight spots often causes shock loading.'
      },
      {
        id: 's11q26',
        question: 'Which condition is most likely when the pulser temperature rises rapidly but vibration remains low?',
        options: ['Pulser wear', 'Poor cooling or circulation issues', 'Magnetometer failure', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Rapid temperature rise with low vibration suggests poor cooling.'
      },
      {
        id: 's11q27',
        question: 'Which dysfunction is most likely when the DD reports poor slide efficiency and the MWD sees high lateral vibration?',
        options: ['Stick slip', 'Whirl', 'Gamma drift', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration reduces slide efficiency by destabilizing toolface.'
      },
      {
        id: 's11q28',
        question: 'Which condition is most likely when the MWD tool experiences repeated resets only during high temperature intervals?',
        options: ['Battery depletion', 'Thermal stress on electronics', 'Pulser wear', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'High temperature causes CPU instability and resets.'
      },
      {
        id: 's11q29',
        question: 'Which dysfunction is most likely when the bit bounces repeatedly off hard formation layers?',
        options: ['Lateral vibration', 'Axial vibration (bit bounce)', 'Stick slip', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Hard stringers cause axial vibration.'
      },
      {
        id: 's11q30',
        question: 'Which condition is most likely when the MWD toolface, gamma, and surveys all freeze simultaneously during a shock event?',
        options: ['Pulser wear', 'CPU lockup from shock', 'Magnetometer drift', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Severe shock can lock up the CPU, freezing all channels.'
      },
      {
        id: 's11q31',
        question: 'Which condition is most likely when the vibration channel shows high axial spikes but lateral and torsional remain low?',
        options: ['Stick slip', 'Bit bounce', 'Whirl', 'Motor stall'],
        correctAnswerIndex: 1,
        explanation: 'Axial spikes indicate vertical motion — classic bit bounce.'
      },
      {
        id: 's11q32',
        question: 'Which dysfunction is most likely when toolface becomes unstable only at high RPM?',
        options: ['Stick slip', 'Lateral vibration or whirl', 'Axial vibration', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'High RPM amplifies lateral vibration, destabilizing toolface.'
      },
      {
        id: 's11q33',
        question: 'Which condition is most likely when surveys show noise only during reaming?',
        options: ['Gamma drift', 'Shock loading', 'Stick slip', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Reaming in tight spots often produces shock events that distort surveys.'
      },
      {
        id: 's11q34',
        question: 'Which dysfunction is most likely when the bit stalls repeatedly during sliding?',
        options: ['Stick slip', 'Motor stall due to high WOB', 'Lateral vibration', 'Axial vibration'],
        correctAnswerIndex: 1,
        explanation: 'Excessive WOB during sliding can stall the motor.'
      },
      {
        id: 's11q35',
        question: 'Which condition is most likely when the MWD toolface rotates slowly even though the driller is sliding?',
        options: ['High gamma ray counts', 'Torsional vibration or partial stick slip', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip can cause unintended toolface rotation during sliding.'
      },
      {
        id: 's11q36',
        question: 'Which dysfunction is most likely when the vibration channel shows simultaneous high axial and lateral spikes?',
        options: ['Stick slip', 'Combined bit bounce and whirl', 'Magnetic interference', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'High axial + high lateral vibration indicates combined dysfunction.'
      },
      {
        id: 's11q37',
        question: 'Which condition is most likely when the pulser begins producing weak pulses during high vibration intervals?',
        options: ['Gamma drift', 'Mechanical interference from vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Vibration disrupts pulser movement, weakening pulses.'
      },
      {
        id: 's11q38',
        question: 'Which dysfunction is most likely when the BHA experiences sudden torque spikes followed by RPM drops?',
        options: ['Axial vibration', 'Stick slip', 'Lateral vibration', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Torque spikes and RPM drops are classic stick slip symptoms.'
      },
      {
        id: 's11q39',
        question: 'Which condition is most likely when surveys show erratic azimuth but stable inclination?',
        options: ['Accelerometer failure', 'Magnetometer instability due to vibration', 'Pulser wear', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth depends on magnetometers, which are sensitive to vibration.'
      },
      {
        id: 's11q40',
        question: 'Which dysfunction is most likely when the MWD tool shows high torsional vibration but no axial or lateral vibration?',
        options: ['Whirl', 'Stick slip', 'Bit bounce', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Torsional vibration alone indicates stick slip.'
      },
      {
        id: 's11q41',
        question: 'Which condition is most likely when the MWD toolface, gamma, and surveys all freeze after a severe shock event?',
        options: ['Pulser wear', 'CPU lockup', 'Magnetometer drift', 'Battery depletion'],
        correctAnswerIndex: 1,
        explanation: 'Severe shock can lock up the CPU, freezing all channels.'
      },
      {
        id: 's11q42',
        question: 'Which dysfunction is most likely when the BHA vibrates heavily only when drilling through interbedded formations?',
        options: ['Stick slip', 'Shock loading', 'Lateral vibration', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Interbedded formations cause sudden impacts → shock loading.'
      },
      {
        id: 's11q43',
        question: 'Which condition is most likely when the vibration channel shows high lateral vibration and the DD reports poor directional response?',
        options: ['High gamma ray counts', 'Whirl reducing slide efficiency', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration destabilizes toolface, reducing directional response.'
      },
      {
        id: 's11q44',
        question: 'Which dysfunction is most likely when the bit repeatedly stalls and then accelerates rapidly?',
        options: ['Axial vibration', 'Stick slip', 'Lateral vibration', 'Shock loading'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip causes alternating stalls and rapid acceleration.'
      },
      {
        id: 's11q45',
        question: 'Why must MWD report vibration and shock levels immediately?',
        options: ['To adjust gamma smoothing', 'To help the DD mitigate dysfunction and protect the BHA', 'To reduce mud costs', 'To increase ROP'],
        correctAnswerIndex: 1,
        explanation: 'Early reporting allows the DD to adjust drilling parameters and prevent tool damage.'
      }
    ]
  },
  {
    id: 'section-12',
    title: 'Gamma Ray, Formation Evaluation & Geological Interpretation',
    content: `This section teaches the trainee how to interpret gamma ray data, understand formation changes, recognize geological markers, and support directional/geosteering decisions with high-quality real-time information.

> **Key Idea:** Gamma is the most important geological measurement in MWD. It helps identify formation boundaries, reservoir entry points, and target windows.

---

### 12.1 What Gamma Ray Measures
Gamma ray measures natural radioactivity in the formation, primarily from:
* Potassium
* Thorium
* Uranium

**High gamma** = shale
**Low gamma** = sand, limestone, dolomite

---

### 12.2 Why Gamma Ray Matters
Gamma ray helps identify:
* Formation boundaries
* Sand/shale transitions
* Reservoir entry points
* Correlation markers
* Target windows
* Geosteering decisions

---

### 12.3 Gamma Ray Response Patterns
**High Gamma**
* Shale
* Tight rock
* Low porosity
* Often non-reservoir

**Low Gamma**
* Sandstone
* Carbonates
* Potential reservoir zones

**Gamma Spikes**
* Thin shale streaks
* Faults
* Formation changes

---

### 12.4 Gamma Ray Lag
Gamma ray is measured at the tool, not at the bit. Lag depends on:
* Tool-to-bit distance
* ROP
* Survey interval

MWD must understand lag to help correlate real-time gamma with bit position.

---

### 12.5 Formation Tops & Markers
Gamma helps identify:
* KOP formation
* Curve landing point
* Lateral entry
* Target boundaries
* Reservoir tops
* Shale/sand transitions

Accurate gamma interpretation supports geosteering.

---

### 12.6 Gamma QC (Quality Control)
MWD must check for:
* Frozen gamma
* Unrealistic spikes
* Noise from vibration
* Incorrect scaling
* Sensor drift
* Memory vs real-time mismatch

Clean gamma is essential for geological decisions.

---

### 12.7 Geological Interpretation Basics
MWD should understand:
* Shale vs sand signatures
* Gradual vs abrupt transitions
* Correlation with offset wells
* How gamma trends affect steering decisions

This helps the DD and geologist make informed choices.

---

### 12.8 Gamma in the Curve
Gamma helps:
* Identify landing point
* Confirm formation entry
* Detect shale boundaries
* Support build/drop decisions

Accurate gamma is critical in the curve.

---

### 12.9 Gamma in the Lateral
In the lateral, gamma is used to:
* Stay within the reservoir
* Detect boundary drift
* Identify faults or formation changes
* Support geosteering adjustments

MWD must deliver gamma quickly and reliably.

---

### 12.10 Why This Section Matters
A great MWD hand:
* Understands gamma trends
* Recognizes formation changes
* Supports geosteering
* QC’s gamma data continuously
* Communicates geological markers clearly

This section builds those skills.`,
    quizQuestions: [
      {
        id: 's12q1',
        question: 'What does gamma ray primarily measure?',
        options: ['Formation density', 'Natural radioactivity', 'Resistivity', 'Porosity'],
        correctAnswerIndex: 1,
        explanation: 'Gamma ray measures natural radioactivity from potassium, thorium, and uranium.'
      },
      {
        id: 's12q2',
        question: 'Which type of formation typically shows high gamma ray values?',
        options: ['Sandstone', 'Limestone', 'Shale', 'Dolomite'],
        correctAnswerIndex: 2,
        explanation: 'Shale contains more radioactive minerals and produces high gamma readings.'
      },
      {
        id: 's12q3',
        question: 'Which type of formation typically shows low gamma ray values?',
        options: ['Shale', 'Sandstone', 'Clay', 'Marl'],
        correctAnswerIndex: 1,
        explanation: 'Sandstones and carbonates have low natural radioactivity.'
      },
      {
        id: 's12q4',
        question: 'What does a sudden gamma ray spike usually indicate?',
        options: ['Tool failure', 'Thin shale streak or formation change', 'High vibration', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Gamma spikes often represent thin shale beds or abrupt formation transitions.'
      },
      {
        id: 's12q5',
        question: 'Why is gamma ray lag important?',
        options: ['It affects mud weight', 'It determines how far behind the bit the gamma tool is reading', 'It changes toolface', 'It affects vibration'],
        correctAnswerIndex: 1,
        explanation: 'Gamma is measured at the tool, not the bit, so lag must be accounted for.'
      },
      {
        id: 's12q6',
        question: 'Which condition is most likely when gamma ray freezes but surveys continue normally?',
        options: ['Pulser failure', 'Gamma detector failure', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'A frozen gamma channel indicates a gamma subsystem issue.'
      },
      {
        id: 's12q7',
        question: 'Which gamma trend typically indicates entering a reservoir sand?',
        options: ['Increasing gamma', 'Decreasing gamma', 'Constant high gamma', 'Constant low gamma'],
        correctAnswerIndex: 1,
        explanation: 'Reservoir sands usually show lower gamma values.'
      },
      {
        id: 's12q8',
        question: 'Which gamma trend typically indicates entering shale?',
        options: ['Decreasing gamma', 'Increasing gamma', 'Constant low gamma', 'Constant medium gamma'],
        correctAnswerIndex: 1,
        explanation: 'Shale has higher radioactivity, so gamma increases.'
      },
      {
        id: 's12q9',
        question: 'Which condition is most likely when gamma ray shows unrealistic noise during drilling?',
        options: ['High mud weight', 'Vibration or shock', 'Low inclination', 'High WOB'],
        correctAnswerIndex: 1,
        explanation: 'Vibration can cause gamma noise or spikes.'
      },
      {
        id: 's12q10',
        question: 'Which part of the well plan relies heavily on gamma ray to identify formation entry?',
        options: ['Surface hole', 'Curve section', 'Casing point', 'Cementing'],
        correctAnswerIndex: 1,
        explanation: 'Gamma helps identify the landing point and formation transitions in the curve.'
      },
      {
        id: 's12q11',
        question: 'Which parameter is most important for staying within the reservoir during the lateral?',
        options: ['Temperature', 'Gamma ray trend', 'Flow rate', 'Battery voltage'],
        correctAnswerIndex: 1,
        explanation: 'Gamma helps identify whether the well is staying within the target zone.'
      },
      {
        id: 's12q12',
        question: 'Which condition is most likely when gamma ray gradually increases over a long interval?',
        options: ['Entering a thicker shale section', 'Entering a clean sand', 'Toolface instability', 'Pulser wear'],
        correctAnswerIndex: 0,
        explanation: 'Gradual gamma increases indicate increasing shale content.'
      },
      {
        id: 's12q13',
        question: 'Which condition is most likely when gamma ray gradually decreases over a long interval?',
        options: ['Entering shale', 'Entering a cleaner sand or carbonate', 'High vibration', 'Tool reset'],
        correctAnswerIndex: 1,
        explanation: 'Decreasing gamma indicates cleaner, less radioactive rock.'
      },
      {
        id: 's12q14',
        question: 'Which condition is most likely when gamma ray shows a sudden drop followed by stable low readings?',
        options: ['Entering a reservoir sand', 'Entering shale', 'Tool failure', 'High vibration'],
        correctAnswerIndex: 0,
        explanation: 'A sudden drop often indicates crossing into a sand or carbonate.'
      },
      {
        id: 's12q15',
        question: 'Why must MWD QC gamma ray data continuously?',
        options: ['To adjust mud weight', 'To support geosteering and formation evaluation', 'To control ROP', 'To monitor toolface'],
        correctAnswerIndex: 1,
        explanation: 'Clean gamma is essential for geological and directional decisions.'
      },
      {
        id: 's12q16',
        question: 'Which condition is most likely when gamma ray gradually increases while drilling the lateral?',
        options: ['Entering a cleaner sand', 'Drifting upward into shale', 'Toolface instability', 'Pulser wear'],
        correctAnswerIndex: 1,
        explanation: 'A gradual gamma increase in the lateral usually means the well is drifting upward into shale.'
      },
      {
        id: 's12q17',
        question: 'Which condition is most likely when gamma ray gradually decreases in the lateral?',
        options: ['Drifting downward into cleaner reservoir rock', 'Entering shale', 'Tool reset', 'High vibration'],
        correctAnswerIndex: 0,
        explanation: 'Decreasing gamma indicates movement into cleaner, less radioactive rock.'
      },
      {
        id: 's12q18',
        question: 'Which condition is most likely when gamma ray shows a sudden spike followed by a return to baseline?',
        options: ['Tool failure', 'Passing through a thin shale streak', 'Entering a thick sand', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Thin shale beds produce short, sharp gamma spikes.'
      },
      {
        id: 's12q19',
        question: 'Which condition is most likely when gamma ray shows a sudden drop followed by stable low readings?',
        options: ['Entering shale', 'Entering a clean sand or carbonate', 'Toolface drift', 'Pulser failure'],
        correctAnswerIndex: 1,
        explanation: 'A sudden drop indicates crossing into a cleaner, low gamma formation.'
      },
      {
        id: 's12q20',
        question: 'Which gamma trend is most useful for identifying formation tops?',
        options: ['Gradual changes', 'Abrupt transitions', 'Constant low gamma', 'Constant high gamma'],
        correctAnswerIndex: 1,
        explanation: 'Formation tops often appear as abrupt gamma transitions.'
      },
      {
        id: 's12q21',
        question: 'Which condition is most likely when gamma ray shows unrealistic noise during high vibration intervals?',
        options: ['Gamma detector failure', 'Vibration interference', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Vibration can cause gamma noise or spikes.'
      },
      {
        id: 's12q22',
        question: 'Which condition is most likely when gamma ray freezes but inclination and azimuth continue updating?',
        options: ['Pulser failure', 'Gamma detector or electronics failure', 'High mud weight', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'A frozen gamma channel indicates a gamma subsystem issue.'
      },
      {
        id: 's12q23',
        question: 'Which gamma trend typically indicates approaching a shale boundary from below?',
        options: ['Gradual decrease', 'Gradual increase', 'Constant low gamma', 'Constant medium gamma'],
        correctAnswerIndex: 1,
        explanation: 'Increasing gamma suggests approaching shale.'
      },
      {
        id: 's12q24',
        question: 'Which gamma trend typically indicates approaching a sand boundary from above?',
        options: ['Gradual increase', 'Gradual decrease', 'Constant high gamma', 'Constant medium gamma'],
        correctAnswerIndex: 1,
        explanation: 'Decreasing gamma suggests approaching cleaner rock.'
      },
      {
        id: 's12q25',
        question: 'Which condition is most likely when gamma ray shows a repeating pattern of spikes and drops?',
        options: ['Toolface instability', 'Interbedded sand/shale sequence', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Interbedded formations produce alternating gamma highs and lows.'
      },
      {
        id: 's12q26',
        question: 'Which condition is most likely when gamma ray shows a sudden, unrealistic jump that does not match formation expectations?',
        options: ['Formation change', 'Sensor noise or vibration', 'Entering a clean sand', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Unrealistic jumps often indicate noise, not geology.'
      },
      {
        id: 's12q27',
        question: 'Which condition is most likely when gamma ray gradually trends upward in the curve?',
        options: ['Entering the reservoir', 'Approaching shale above the landing point', 'Tool reset', 'Pulser failure'],
        correctAnswerIndex: 1,
        explanation: 'Increasing gamma in the curve often means the well is climbing into shale.'
      },
      {
        id: 's12q28',
        question: 'Which condition is most likely when gamma ray gradually trends downward in the curve?',
        options: ['Approaching the reservoir sand', 'Entering shale', 'High vibration', 'Toolface drift'],
        correctAnswerIndex: 0,
        explanation: 'Decreasing gamma indicates movement toward cleaner reservoir rock.'
      },
      {
        id: 's12q29',
        question: 'Which condition is most likely when gamma ray shows a sudden drop exactly at the expected landing depth?',
        options: ['Tool failure', 'Successful landing into the target formation', 'Vibration interference', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'A sudden drop at landing depth indicates entry into the reservoir.'
      },
      {
        id: 's12q30',
        question: 'Why must MWD understand gamma ray trends during the lateral?',
        options: ['To adjust mud weight', 'To help maintain the wellbore within the reservoir', 'To control ROP', 'To monitor toolface'],
        correctAnswerIndex: 1,
        explanation: 'Gamma trends help ensure the well stays within the target zone.'
      },
      {
        id: 's12q31',
        question: 'Which condition is most likely when gamma ray shows a repeating pattern of high low high low values over a short interval?',
        options: ['Toolface instability', 'Interbedded sand/shale sequence', 'Pulser failure', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Alternating gamma highs and lows indicate interbedded formations.'
      },
      {
        id: 's12q32',
        question: 'Which condition is most likely when gamma ray shows a sudden, sharp increase that does not match expected geology?',
        options: ['Entering shale', 'Sensor noise or vibration', 'Entering a clean sand', 'Toolface drift'],
        correctAnswerIndex: 1,
        explanation: 'Unrealistic spikes often indicate noise, not geology.'
      },
      {
        id: 's12q33',
        question: 'Which gamma trend is most useful for identifying the top of a reservoir?',
        options: ['Gradual increase', 'Sudden decrease', 'Constant high gamma', 'Constant medium gamma'],
        correctAnswerIndex: 1,
        explanation: 'Reservoir entry is typically marked by a sudden gamma drop.'
      },
      {
        id: 's12q34',
        question: 'Which condition is most likely when gamma ray gradually increases in the lateral while surveys remain stable?',
        options: ['Drifting upward into shale', 'Drifting downward into sand', 'Tool reset', 'Pulser wear'],
        correctAnswerIndex: 0,
        explanation: 'Increasing gamma in the lateral usually means the well is climbing into shale.'
      },
      {
        id: 's12q35',
        question: 'Which condition is most likely when gamma ray gradually decreases in the lateral while surveys remain stable?',
        options: ['Drifting upward into shale', 'Drifting downward into cleaner reservoir rock', 'Toolface instability', 'High vibration'],
        correctAnswerIndex: 1,
        explanation: 'Decreasing gamma indicates movement into cleaner rock.'
      },
      {
        id: 's12q36',
        question: 'Which condition is most likely when gamma ray shows a sudden drop followed by a return to high values?',
        options: ['Passing through a thin sand streak', 'Entering a thick reservoir', 'Tool failure', 'High mud weight'],
        correctAnswerIndex: 0,
        explanation: 'Thin sand beds produce short, sharp gamma drops.'
      },
      {
        id: 's12q37',
        question: 'Which condition is most likely when gamma ray shows a long interval of consistently low readings?',
        options: ['Shale', 'Clean sand or carbonate', 'Fault zone', 'Sensor drift'],
        correctAnswerIndex: 1,
        explanation: 'Clean sands and carbonates produce consistently low gamma.'
      },
      {
        id: 's12q38',
        question: 'Which condition is most likely when gamma ray shows a long interval of consistently high readings?',
        options: ['Clean sand', 'Carbonate', 'Shale', 'Fault zone'],
        correctAnswerIndex: 2,
        explanation: 'Shale produces consistently high gamma values.'
      },
      {
        id: 's12q39',
        question: 'Which condition is most likely when gamma ray shows a sudden, unrealistic drop to zero?',
        options: ['Entering a clean sand', 'Gamma detector failure or scaling issue', 'Formation change', 'High vibration'],
        correctAnswerIndex: 1,
        explanation: 'Zero gamma is almost always a sensor or scaling failure.'
      },
      {
        id: 's12q40',
        question: 'Which condition is most likely when gamma ray shows a sudden jump exactly at a survey interval boundary?',
        options: ['Formation change', 'Survey interpolation or data glitch', 'Entering shale', 'Entering sand'],
        correctAnswerIndex: 1,
        explanation: 'Sudden jumps at survey boundaries often indicate data glitches.'
      },
      {
        id: 's12q41',
        question: 'Which condition is most likely when gamma ray shows a smooth, gradual trend that matches offset well logs?',
        options: ['Tool failure', 'Normal formation transition', 'Vibration interference', 'Scaling error'],
        correctAnswerIndex: 1,
        explanation: 'Smooth gamma trends that match offsets indicate real geology.'
      },
      {
        id: 's12q42',
        question: 'Which condition is most likely when gamma ray shows a sudden spike followed by frozen values?',
        options: ['Entering shale', 'Gamma detector failure', 'Formation change', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'A spike followed by frozen values indicates gamma subsystem failure.'
      },
      {
        id: 's12q43',
        question: 'Which condition is most likely when gamma ray shows a gradual upward trend in the curve section?',
        options: ['Approaching the reservoir', 'Approaching shale above the landing point', 'Tool reset', 'Pulser wear'],
        correctAnswerIndex: 1,
        explanation: 'Increasing gamma in the curve often means the well is climbing into shale.'
      },
      {
        id: 's12q44',
        question: 'Which condition is most likely when gamma ray shows a gradual downward trend in the curve section?',
        options: ['Approaching the reservoir sand', 'Entering shale', 'High vibration', 'Toolface drift'],
        correctAnswerIndex: 0,
        explanation: 'Decreasing gamma indicates movement toward cleaner reservoir rock.'
      },
      {
        id: 's12q45',
        question: 'Why must MWD understand gamma interpretation during the curve and lateral?',
        options: ['To adjust mud weight', 'To support geosteering and maintain wellbore placement', 'To control ROP', 'To monitor toolface'],
        correctAnswerIndex: 1,
        explanation: 'Gamma interpretation helps keep the well within the target formation.'
      }
    ]
  },
  {
    id: 'section-13',
    title: 'Field Scenarios & Case Studies',
    content: `This section builds real-world confidence, situational awareness, and operational judgment by exposing the trainee to realistic telemetry and drilling environment challenges.

> **Key Idea:** These scenarios reflect the most common — and most critical — issues an MWD hand must diagnose quickly.

---

### 13.1 Lost Communications During Slide
Sliding creates:
* Lower RPM
* Higher friction
* Higher vibration
* Motor stalls
* Toolface instability

These conditions often cause:
* Weak pulses
* Distorted pulses
* Dropouts
* Low SNR

MWD must determine whether the issue is pulser-related, hydraulics-related, or vibration-related.

---

### 13.2 High Vibration in the Curve
The curve is notorious for:
* High DLS
* BHA instability
* Whirl
* Stick slip
* Shock events

High vibration affects:
* Pulse clarity
* SNR
* Toolface
* Survey quality

MWD must recognize vibration signatures and communicate early.

---

### 13.3 Magnetic Interference Near Casing
When drilling near casing or magnetic steel:
* Azimuth becomes erratic
* Dip angle becomes unrealistic
* Magnetic magnitude spikes or drops
* Toolface jumps

MWD must identify interference vs sensor failure.

---

### 13.4 EM Signal Loss in Conductive Formations
EM telemetry struggles in:
* Salt
* Shale with high water content
* Conductive formations
* Deep wells

Symptoms include:
* Weak EM signal
* No decoding
* Intermittent comms
* High noise floor

MWD must know when EM is unreliable.

---

### 13.5 Gamma Ray Dropouts
Gamma dropouts may be caused by:
* Sensor failure
* Connector issues
* Shock events
* High vibration
* Electronics resets

MWD must distinguish between geological changes and tool issues.

---

### 13.6 Toolface Oscillation in Motor Runs
Toolface oscillation occurs when:
* Lateral vibration is high
* Motor stalls
* Bit is bouncing
* BHA is unstable
* RPM is inconsistent

MWD must identify whether the oscillation is mechanical, hydraulic, or formation-related.

---

### 13.7 Why These Scenarios Matter
A great MWD hand:
* Recognizes patterns instantly
* Diagnoses issues under pressure
* Communicates clearly with the DD
* Protects the tool
* Prevents unnecessary trips
* Maintains high-quality data flow

This section builds real-world judgment.`,
    quizQuestions: [
      {
        id: 's13q1',
        question: 'During a slide, telemetry drops out completely but returns as soon as rotation resumes. What is the most likely cause?',
        options: ['Pulser failure', 'Vibration affecting pulser stroke during sliding', 'Magnetic interference', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Sliding increases vibration and motor stalls, which disrupt pulser movement.'
      },
      {
        id: 's13q2',
        question: 'While sliding in the curve, SNR drops sharply even though flow rate is unchanged. What is the most likely cause?',
        options: ['High gamma ray', 'Increased vibration in the curve', 'Pulser wear', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'The curve often produces high vibration, which distorts pulses.'
      },
      {
        id: 's13q3',
        question: 'Azimuth becomes erratic when drilling near surface casing. What is the most likely cause?',
        options: ['Magnetometer failure', 'Magnetic interference from casing', 'Pulser stall', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Steel casing distorts the magnetic field.'
      },
      {
        id: 's13q4',
        question: 'EM telemetry works fine in the vertical but drops out completely in the curve. What is the most likely cause?',
        options: ['Pulser wear', 'Conductive formation reducing EM signal', 'High gamma ray', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'EM signals attenuate rapidly in conductive formations.'
      },
      {
        id: 's13q5',
        question: 'Gamma ray suddenly drops to zero but surveys continue normally. What is the most likely cause?',
        options: ['Entering clean sand', 'Gamma detector failure', 'Magnetic interference', 'High vibration'],
        correctAnswerIndex: 1,
        explanation: 'Zero gamma is almost always a sensor or electronics failure.'
      },
      {
        id: 's13q6',
        question: 'Toolface oscillates rapidly during a motor run even though the driller is sliding smoothly. What is the most likely cause?',
        options: ['Gamma drift', 'Lateral vibration or whirl', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Lateral vibration destabilizes toolface.'
      },
      {
        id: 's13q7',
        question: 'Telemetry weakens only during long slides with high WOB. What is the most likely cause?',
        options: ['Gamma drift', 'Motor stalls reducing pulser drive power', 'High mud weight', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'High WOB increases motor stalls, weakening pulses.'
      },
      {
        id: 's13q8',
        question: 'During a slide, pulse amplitude becomes inconsistent but returns to normal during rotation. What is the most likely cause?',
        options: ['Pulser wear', 'Vibration affecting pulser stroke', 'High mud weight', 'Gamma drift'],
        correctAnswerIndex: 1,
        explanation: 'Sliding increases vibration, causing inconsistent pulses.'
      },
      {
        id: 's13q9',
        question: 'While drilling near a known offset well, azimuth drifts unexpectedly. What is the most likely cause?',
        options: ['Pulser failure', 'Magnetic interference from nearby wellbore', 'High gamma ray', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Offset wells distort the magnetic field.'
      },
      {
        id: 's13q10',
        question: 'EM telemetry works at shallow depth but becomes intermittent deeper in the well. What is the most likely cause?',
        options: ['Pulser wear', 'Increased formation conductivity with depth', 'High gamma ray', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'EM signals attenuate more in deeper, more conductive formations.'
      },
      {
        id: 's13q11',
        question: 'Gamma ray shows intermittent dropouts during high vibration intervals. What is the most likely cause?',
        options: ['Entering clean sand', 'Vibration affecting gamma electronics', 'Pulser stall', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Vibration can cause gamma noise or dropouts.'
      },
      {
        id: 's13q12',
        question: 'Toolface oscillates only when RPM increases. What is the most likely cause?',
        options: ['Gamma drift', 'Lateral vibration increasing with RPM', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Higher RPM amplifies lateral vibration.'
      },
      {
        id: 's13q13',
        question: 'Telemetry drops out only when pumps change speed. What is the most likely cause?',
        options: ['Gamma drift', 'Pump harmonics masking pulses', 'Pulser wear', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Pump speed changes create harmonics that interfere with telemetry.'
      },
      {
        id: 's13q14',
        question: 'During a slide, SNR drops but pulse amplitude remains normal. What is the most likely cause?',
        options: ['Pulser wear', 'Increased noise from vibration', 'Gamma drift', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Normal amplitude + low SNR = noise problem, not signal problem.'
      },
      {
        id: 's13q15',
        question: 'While drilling in the curve, surveys show noise and toolface jumps. What is the most likely cause?',
        options: ['Gamma drift', 'High vibration in the curve', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'The curve often produces high vibration, affecting surveys and toolface.'
      },
      {
        id: 's13q16',
        question: 'During a slide, pulse amplitude is normal but SNR drops sharply. Rotation immediately restores SNR. What is the most likely cause?',
        options: ['Pulser wear', 'Increased vibration during sliding', 'Magnetic interference', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Sliding increases vibration, which raises noise and lowers SNR even if amplitude is normal.'
      },
      {
        id: 's13q17',
        question: 'While drilling near a whipstock or steel BHA component, azimuth becomes unstable but inclination remains clean. What is the most likely cause?',
        options: ['Accelerometer failure', 'Magnetic interference', 'Pulser stall', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Steel components distort the magnetic field, affecting azimuth but not inclination.'
      },
      {
        id: 's13q18',
        question: 'During a long slide, toolface drifts slowly even though the driller is holding weight steady. What is the most likely cause?',
        options: ['Gamma drift', 'Partial stick slip or torsional vibration', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip causes unintended rotation, drifting toolface.'
      },
      {
        id: 's13q19',
        question: 'EM telemetry works well at shallow depth but becomes intermittent when entering a thick shale. What is the most likely cause?',
        options: ['Pulser stall', 'High formation conductivity', 'High gamma ray', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Shale often has high conductivity, which attenuates EM signals.'
      },
      {
        id: 's12q20',
        question: 'Gamma ray shows a sudden spike followed by frozen values. Surveys continue normally. What is the most likely cause?',
        options: ['Entering shale', 'Gamma detector failure', 'Magnetic interference', 'High vibration'],
        correctAnswerIndex: 1,
        explanation: 'A spike followed by frozen values indicates gamma subsystem failure.'
      },
      {
        id: 's13q21',
        question: 'During rotation, toolface is stable. During sliding, toolface oscillates ±20°. What is the most likely cause?',
        options: ['Gamma drift', 'Lateral vibration or whirl', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Sliding increases lateral vibration, destabilizing toolface.'
      },
      {
        id: 's13q22',
        question: 'Telemetry drops out only when WOB is increased significantly during a slide. What is the most likely cause?',
        options: ['Gamma drift', 'Motor stalls reducing pulser drive power', 'Magnetic interference', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High WOB increases motor stalls, weakening or stopping pulses.'
      },
      {
        id: 's13q23',
        question: 'Pulse amplitude is strong, but decoding becomes intermittent only when pumps are ramping up or down. What is the most likely cause?',
        options: ['Pulser wear', 'Pump harmonics masking pulses', 'Gamma drift', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Pump speed changes create harmonics that interfere with telemetry.'
      },
      {
        id: 's13q24',
        question: 'While drilling in the curve, surveys show erratic azimuth but stable inclination. What is the most likely cause?',
        options: ['Accelerometer failure', 'Magnetic interference or vibration affecting magnetometers', 'Pulser stall', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Azimuth depends on magnetometers, which are sensitive to vibration and interference.'
      },
      {
        id: 's13q25',
        question: 'During a slide, SNR is low but pulse amplitude is normal. During rotation, SNR becomes high again. What is the most likely cause?',
        options: ['Pulser wear', 'Noise from vibration during sliding', 'Gamma drift', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Normal amplitude + low SNR = noise problem, not signal problem.'
      },
      {
        id: 's13q26',
        question: 'EM telemetry drops out only when drilling through a salt section. What is the most likely cause?',
        options: ['Pulser stall', 'Extremely high formation conductivity', 'High gamma ray', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Salt is highly conductive and absorbs EM signals.'
      },
      {
        id: 's13q27',
        question: 'Gamma ray shows intermittent dropouts only during severe vibration intervals. What is the most likely cause?',
        options: ['Entering clean sand', 'Vibration affecting gamma electronics', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Vibration can cause gamma noise or temporary dropouts.'
      },
      {
        id: 's13q28',
        question: 'Toolface oscillates only when RPM exceeds 120. Below 120, toolface is stable. What is the most likely cause?',
        options: ['Gamma drift', 'Lateral vibration increasing with RPM', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Higher RPM amplifies lateral vibration, destabilizing toolface.'
      },
      {
        id: 's13q29',
        question: 'Telemetry drops out only when pumps are at maximum flow. What is the most likely cause?',
        options: ['Gamma drift', 'Pulser overload or bypass erosion', 'Magnetic interference', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Excessive flow can overload the pulser or erode bypass components.'
      },
      {
        id: 's13q30',
        question: 'During a slide, pulse spacing becomes inconsistent but amplitude remains strong. What is the most likely cause?',
        options: ['Gamma drift', 'Pulser timing or motor control issue triggered by vibration', 'Low mud weight', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Inconsistent spacing indicates timing issues, often triggered by vibration during sliding.'
      },
      {
        id: 's13q31',
        question: 'Telemetry becomes intermittent only when drilling through a highly interbedded sand/shale sequence. What is the most likely cause?',
        options: ['Pulser wear', 'Rapid vibration changes as bit transitions between layers', 'Magnetic interference', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Interbedded layers cause rapid bit loading changes → vibration spikes → pulse distortion.'
      },
      {
        id: 's13q32',
        question: 'Pulse amplitude is strong, but pulse shape becomes distorted only during high torque events. What is the most likely cause?',
        options: ['Gamma drift', 'Torsional vibration affecting pulser stroke', 'Magnetic interference', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High torque → torsional vibration → distorted pulse shape.'
      },
      {
        id: 's13q33',
        question: 'During a slide, toolface is stable for several minutes, then suddenly jumps 40° with no driller input. What is the most likely cause?',
        options: ['Gamma drift', 'Motor stall followed by sudden release', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Motor stalls build torque → sudden release → toolface jump.'
      },
      {
        id: 's13q34',
        question: 'Telemetry drops out only when drilling through a known fault zone. What is the most likely cause?',
        options: ['Pulser failure', 'Severe vibration or shock events', 'Magnetic interference', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Fault zones often produce extreme vibration → pulse distortion.'
      },
      {
        id: 's13q35',
        question: 'Azimuth becomes erratic only when drilling parallel to a nearby offset well. What is the most likely cause?',
        options: ['Pulser wear', 'Magnetic interference from the offset well', 'High gamma ray', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Parallel wellbores distort the magnetic field.'
      },
      {
        id: 's13q36',
        question: 'Pulse spacing becomes inconsistent only during high ROP intervals. What is the most likely cause?',
        options: ['Gamma drift', 'Bit bounce or axial vibration', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High ROP increases bit bounce → inconsistent pulser timing.'
      },
      {
        id: 's13q37',
        question: 'Gamma ray shows repeating dropouts every time the bit hits a hard stringer. What is the most likely cause?',
        options: ['Entering clean sand', 'Shock events affecting gamma electronics', 'Pulser stall', 'Magnetic interference'],
        correctAnswerIndex: 1,
        explanation: 'Hard stringers cause shock → gamma electronics momentarily lose signal.'
      },
      {
        id: 's13q38',
        question: 'Telemetry becomes weak only when drilling with very high flow rates. What is the most likely cause?',
        options: ['Gamma drift', 'Pulser overload or bypass erosion', 'Magnetic interference', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Excessive flow can overload the pulser or erode bypass components.'
      },
      {
        id: 's13q39',
        question: 'During a slide, SNR is low but pulse amplitude is high. During rotation, SNR becomes normal. What is the most likely cause?',
        options: ['Pulser wear', 'Noise from vibration during sliding', 'Gamma drift', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High amplitude + low SNR = noise problem, not signal problem.'
      },
      {
        id: 's13q40',
        question: 'EM telemetry works at shallow depth but becomes completely unusable when drilling through a thick salt section. What is the most likely cause?',
        options: ['Pulser stall', 'Extremely high formation conductivity', 'High gamma ray', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Salt is highly conductive and absorbs EM signals.'
      },
      {
        id: 's13q41',
        question: 'Toolface oscillates only when WOB exceeds a certain threshold. What is the most likely cause?',
        options: ['Gamma drift', 'Lateral vibration increasing with WOB', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Higher WOB increases lateral vibration → toolface instability.'
      },
      {
        id: 's13q42',
        question: 'Pulse amplitude is normal, but the decoder intermittently loses lock during pump strokes. What is the most likely cause?',
        options: ['Gamma drift', 'Pump harmonics interfering with telemetry', 'Pulser wear', 'High inclination'],
        correctAnswerIndex: 1,
        explanation: 'Pump strokes create periodic noise that masks pulses.'
      },
      {
        id: 's13q43',
        question: 'During a slide, toolface drifts slowly even though torque is steady. What is the most likely cause?',
        options: ['Gamma drift', 'Partial stick slip causing unintended rotation', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip causes unintended rotation → toolface drift.'
      },
      {
        id: 's13q44',
        question: 'Telemetry drops out only when drilling through a highly fractured zone. What is the most likely cause?',
        options: ['Gamma drift', 'Severe vibration or shock from fractured rock', 'Pulser wear', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Fractured zones cause vibration spikes → pulse distortion.'
      },
      {
        id: 's13q45',
        question: 'Why must MWD recognize these field scenarios quickly?',
        options: ['To adjust mud weight', 'To prevent unnecessary trips, protect the tool, and maintain data quality', 'To control ROP', 'To operate the drawworks'],
        correctAnswerIndex: 1,
        explanation: 'Fast diagnosis prevents failures, protects the BHA, and keeps telemetry reliable.'
      }
    ]
  },
  {
    id: 'section-14',
    title: 'Pre Run & Post Run Procedures',
    content: `This section ensures consistency, reliability, and professionalism in field operations by teaching the trainee how to properly prepare, test, program, QA/QC, and close out an MWD run.

> **Key Idea:** This section is all about repeatable excellence. Proper preparation prevents most failures.

---

### 14.1 Tool Preparation
Before anything else, the MWD hand must:
* Inspect all tool components
* Check connectors, seals, and O-rings
* Verify battery condition
* Confirm pulser mechanical integrity
* Inspect sensors for damage
* Verify correct tool configuration for the run

---

### 14.2 Bench Testing
Bench testing ensures the tool works before it goes downhole.
Includes:
* Pulser function test
* Sensor checks (gamma, incl/azimuth, vibration)
* Pressure test (if required)
* Communication test
* Flow loop test (if available)

Bench tests catch issues early.

---

### 14.3 Programming
Programming includes:
* Survey interval
* Telemetry mode
* Pulse width / spacing
* Toolface mode
* Gamma scaling
* Memory logging parameters
* Run ID and well info

**Key Note:** Incorrect programming = incorrect data.

---

### 14.4 QA/QC Before Run
MWD must verify:
* All sensors respond correctly
* Telemetry decodes cleanly
* Toolface is stable
* Gamma matches expected baseline
* Memory logging is active
* All serial numbers match paperwork

QA/QC ensures the tool is ready for the well.

---

### 14.5 Post-Run Data Extraction
After the run, MWD must:
* Download memory data
* Verify completeness
* Check for gaps or corruption
* Compare memory vs real-time
* Export logs for reporting

**Key Note:** Memory data is often the most accurate record.

---

### 14.6 Memory Dump & Diagnostics
Memory dump includes:
* Raw sensor logs
* Shock/vibration history
* Temperature logs
* Pulser performance logs
* Error codes
* CPU resets
* Battery usage

This data helps diagnose failures and improve future runs.

---

### 14.7 Reporting
MWD must produce:
* Pre-run checklist
* Post-run report
* Survey report
* Gamma log
* Telemetry performance summary
* Failure analysis (if needed)
* Tool performance notes

Professional reporting builds trust and credibility.

---

### 14.8 Why This Section Matters
A great MWD hand:
* Prepares tools meticulously
* Bench tests thoroughly
* Programs accurately
* QA/QCs everything
* Extracts clean data
* Reports professionally

This section builds operational discipline.`,
    quizQuestions: [
      {
        id: 's14q1',
        question: 'During bench testing, the pulser fires but the pulse shape is weak and rounded. What should you do first?',
        options: ['Ignore it', 'Inspect pulser mechanical components for wear', 'Change gamma scaling', 'Increase survey interval'],
        correctAnswerIndex: 1,
        explanation: 'Weak or rounded pulses indicate mechanical wear.'
      },
      {
        id: 's14q2',
        question: 'During programming, you notice the survey interval is set to 180 seconds, but the DD requested 60 seconds. What should you do?',
        options: ['Leave it', 'Reprogram the tool to the correct interval', 'Increase gamma gain', 'Change toolface mode'],
        correctAnswerIndex: 1,
        explanation: 'Incorrect programming leads to incorrect data timing.'
      },
      {
        id: 's14q3',
        question: 'During QA/QC, gamma ray reads zero even though the tool is functioning. What is the most likely cause?',
        options: ['Clean sand', 'Gamma detector failure', 'High vibration', 'Incorrect mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Zero gamma during QA/QC indicates a sensor issue.'
      },
      {
        id: 's14q4',
        question: 'During bench testing, toolface jumps erratically even though the tool is stationary. What is the most likely cause?',
        options: ['Magnetic interference', 'Pulser wear', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 0,
        explanation: 'Nearby steel or magnets distort toolface readings.'
      },
      {
        id: 's14q5',
        question: 'Memory logging is enabled, but after the run the memory file is empty. What is the most likely cause?',
        options: ['High gamma ray', 'Logging was not started correctly', 'High vibration', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Memory logging must be explicitly activated.'
      },
      {
        id: 's14q6',
        question: 'During pre run QA/QC, the tool passes all tests except for a weak pulser. What should you do?',
        options: ['Run it anyway', 'Replace or service the pulser', 'Increase flow rate', 'Change survey interval'],
        correctAnswerIndex: 1,
        explanation: 'Weak pulsers fail downhole — fix it before running.'
      },
      {
        id: 's14q7',
        question: 'During programming, you notice the toolface mode is set to “continuous,” but the run requires “sliding mode.” What should you do?',
        options: ['Ignore it', 'Reprogram to sliding mode', 'Increase gamma gain', 'Change survey interval'],
        correctAnswerIndex: 1,
        explanation: 'Incorrect toolface mode affects directional control.'
      },
      {
        id: 's14q8',
        question: 'During post run extraction, memory data shows multiple CPU resets. What does this indicate?',
        options: ['Gamma drift', 'Shock, vibration, or thermal stress', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'CPU resets indicate mechanical or thermal stress.'
      },
      {
        id: 's14q9',
        question: 'During QA/QC, SNR is low even though pulse amplitude is strong. What is the most likely cause?',
        options: ['Pulser wear', 'Noise from nearby equipment', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 1,
        explanation: 'Strong pulses + low SNR = noise problem.'
      },
      {
        id: 's14q10',
        question: 'During post run reporting, you notice memory gamma does not match real time gamma. What should you do?',
        options: ['Ignore it', 'Document the discrepancy and investigate', 'Change survey interval', 'Reprogram the tool'],
        correctAnswerIndex: 1,
        explanation: 'Memory vs real time mismatch must be documented.'
      },
      {
        id: 's14q11',
        question: 'During bench testing, the tool fails to communicate with the surface system. What is the first step?',
        options: ['Replace the pulser', 'Check connectors and communication cables', 'Change gamma scaling', 'Increase flow rate'],
        correctAnswerIndex: 1,
        explanation: 'Communication failures often come from loose or damaged connectors.'
      },
      {
        id: 's14q12',
        question: 'During post run diagnostics, vibration logs show repeated high lateral spikes. What does this indicate?',
        options: ['Gamma drift', 'Whirl or lateral vibration downhole', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Lateral spikes indicate whirl or instability.'
      },
      {
        id: 's14q13',
        question: 'During QA/QC, the toolface is stable but azimuth is off by 20° from expected. What is the most likely cause?',
        options: ['Pulser wear', 'Magnetic interference in the shop', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 1,
        explanation: 'Shops often have steel structures that distort azimuth.'
      },
      {
        id: 's14q14',
        question: 'During post run extraction, memory shows a long period with no gamma data. What is the most likely cause?',
        options: ['Entering clean sand', 'Gamma subsystem failure', 'High vibration', 'Incorrect programming'],
        correctAnswerIndex: 1,
        explanation: 'Missing gamma data indicates a sensor or electronics failure.'
      },
      {
        id: 's14q15',
        question: 'Why must MWD follow strict pre run and post run procedures?',
        options: ['To adjust mud weight', 'To ensure reliability, prevent failures, and maintain professional standards', 'To control ROP', 'To operate the drawworks'],
        correctAnswerIndex: 1,
        explanation: 'Consistent procedures ensure safe, reliable, professional operations.'
      },
      {
        id: 's14q16',
        question: 'During pre run inspection, you notice a damaged O ring on a critical tool joint. What should you do?',
        options: ['Ignore it', 'Replace the O ring before continuing', 'Increase survey interval', 'Run the tool and monitor it closely'],
        correctAnswerIndex: 1,
        explanation: 'Damaged seals lead to catastrophic failures — replace immediately.'
      },
      {
        id: 's14q17',
        question: 'During bench testing, the tool communicates intermittently when the cable is moved. What is the most likely cause?',
        options: ['Gamma drift', 'Damaged or loose communication cable', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Intermittent comms during movement indicates a cable or connector issue.'
      },
      {
        id: 's14q18',
        question: 'During programming, you notice the run ID does not match the well name. What should you do?',
        options: ['Ignore it', 'Correct the run ID', 'Increase pulse width', 'Change gamma scaling'],
        correctAnswerIndex: 1,
        explanation: 'Incorrect run IDs cause reporting and data tracking errors.'
      },
      {
        id: 's14q19',
        question: 'During QA/QC, the pulser fires but the amplitude is lower than expected. What should you check first?',
        options: ['Gamma scaling', 'Flow rate or bench test pressure', 'Survey interval', 'Toolface mode'],
        correctAnswerIndex: 1,
        explanation: 'Low amplitude may simply be due to insufficient flow or pressure.'
      },
      {
        id: 's14q20',
        question: 'During pre run QA/QC, the accelerometers respond correctly but magnetometers show unstable readings. What is the most likely cause?',
        options: ['Pulser wear', 'Magnetic interference in the shop', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 1,
        explanation: 'Shops often contain steel structures that distort magnetometer readings.'
      },
      {
        id: 's14q21',
        question: 'During post run extraction, memory shows a long period of missing surveys. Real time data was normal. What is the most likely cause?',
        options: ['High vibration', 'Memory logging failure', 'Incorrect mud weight', 'Gamma drift'],
        correctAnswerIndex: 1,
        explanation: 'Missing memory surveys indicate logging was not active or failed.'
      },
      {
        id: 's14q22',
        question: 'During pre run testing, the toolface is stable but inclination reads 0.0°. What is the most likely cause?',
        options: ['Pulser wear', 'Accelerometer failure', 'Magnetic interference', 'Incorrect programming'],
        correctAnswerIndex: 1,
        explanation: 'Inclination depends on accelerometers — 0.0° indicates failure.'
      },
      {
        id: 's14q23',
        question: 'During post run diagnostics, temperature logs show repeated spikes above tool limits. What does this indicate?',
        options: ['Gamma drift', 'Thermal stress that may have damaged electronics', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High temperature is a major cause of downhole tool failures.'
      },
      {
        id: 's14q24',
        question: 'During QA/QC, SNR is high but pulse shape is distorted. What is the most likely cause?',
        options: ['Noise', 'Pulser mechanical issue', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 1,
        explanation: 'Distorted shape with high SNR indicates mechanical problems, not noise.'
      },
      {
        id: 's14q25',
        question: 'During post run extraction, the memory file is present but corrupted. What should you do?',
        options: ['Ignore it', 'Attempt recovery and document the issue in the report', 'Change survey interval', 'Reprogram the tool'],
        correctAnswerIndex: 1,
        explanation: 'Corrupted memory must be documented and recovery attempted.'
      },
      {
        id: 's14q26',
        question: 'During pre run testing, the pulser fires normally but the surface system does not decode. What is the first step?',
        options: ['Replace the pulser', 'Check surface sensor configuration and filtering', 'Increase flow rate', 'Change gamma scaling'],
        correctAnswerIndex: 1,
        explanation: 'If pulses fire but don’t decode, surface configuration is the first suspect.'
      },
      {
        id: 's14q27',
        question: 'During QA/QC, gamma ray reads correctly but the gamma scaling is set to the wrong range. What should you do?',
        options: ['Leave it', 'Correct the scaling before running', 'Increase survey interval', 'Change toolface mode'],
        correctAnswerIndex: 1,
        explanation: 'Incorrect scaling produces misleading gamma logs.'
      },
      {
        id: 's14q28',
        question: 'During post run diagnostics, shock logs show repeated high axial spikes. What does this indicate?',
        options: ['Gamma drift', 'Bit bounce or axial vibration downhole', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Axial spikes indicate bit bounce or axial vibration.'
      },
      {
        id: 's14q29',
        question: 'During pre run QA/QC, the tool passes all tests except for a failing battery voltage check. What should you do?',
        options: ['Run it anyway', 'Replace the battery', 'Increase survey interval', 'Change gamma scaling'],
        correctAnswerIndex: 1,
        explanation: 'Low battery voltage leads to downhole resets and failures.'
      },
      {
        id: 's14q30',
        question: 'Why is post run memory extraction essential even when real time data looked perfect?',
        options: ['To adjust mud weight', 'Memory is the most complete and accurate record of the run', 'To control ROP', 'To operate the drawworks'],
        correctAnswerIndex: 1,
        explanation: 'Memory logs contain full resolution data, error codes, and diagnostics.'
      },
      {
        id: 's14q31',
        question: 'During pre run inspection, you find a connector pin slightly bent. What should you do?',
        options: ['Straighten it with pliers and run it', 'Replace or repair the connector properly', 'Ignore it', 'Increase survey interval'],
        correctAnswerIndex: 1,
        explanation: 'Bent pins cause intermittent comms and downhole failures — repair or replace.'
      },
      {
        id: 's14q32',
        question: 'During QA/QC, the pulser fires normally but the pressure sensor on the standpipe does not detect pulses. What is the first step?',
        options: ['Replace the pulser', 'Check surface sensor configuration and filtering', 'Change gamma scaling', 'Increase flow rate'],
        correctAnswerIndex: 1,
        explanation: 'If the pulser fires but isn’t detected, the issue is usually surface side.'
      },
      {
        id: 's14q33',
        question: 'During pre run programming, you notice the tool is set to the wrong telemetry mode for the mud system. What should you do?',
        options: ['Ignore it', 'Reprogram to the correct telemetry mode', 'Increase pulse width', 'Change survey interval'],
        correctAnswerIndex: 1,
        explanation: 'Wrong telemetry mode = poor decoding or no comms.'
      },
      {
        id: 's14q34',
        question: 'During bench testing, the toolface is stable but azimuth drifts slowly over time. What is the most likely cause?',
        options: ['Pulser wear', 'Magnetic interference in the shop', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 1,
        explanation: 'Steel structures or magnets cause slow azimuth drift.'
      },
      {
        id: 's14q35',
        question: 'During post run extraction, memory shows multiple high temperature warnings. What does this indicate?',
        options: ['Gamma drift', 'Thermal stress that may have damaged electronics', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'High temperature is a major cause of tool failure and resets.'
      },
      {
        id: 's14q36',
        question: 'During QA/QC, the tool passes all tests except gamma, which reads unusually high. What should you check first?',
        options: ['Mud weight', 'Gamma scaling or calibration', 'Survey interval', 'Toolface mode'],
        correctAnswerIndex: 1,
        explanation: 'Incorrect scaling or calibration causes unrealistic gamma readings.'
      },
      {
        id: 's14q37',
        question: 'During pre run inspection, you notice the pulser shaft has minor scoring. What should you do?',
        options: ['Run it', 'Replace or service the pulser', 'Increase flow rate', 'Change survey interval'],
        correctAnswerIndex: 1,
        explanation: 'Scoring indicates wear — pulser failure is likely downhole.'
      },
      {
        id: 's14q38',
        question: 'During post run diagnostics, memory shows repeated low voltage warnings. What does this indicate?',
        options: ['Gamma drift', 'Battery nearing depletion', 'Incorrect programming', 'High mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Low voltage causes resets and telemetry dropouts.'
      },
      {
        id: 's14q39',
        question: 'During QA/QC, SNR is high but pulse spacing is inconsistent. What is the most likely cause?',
        options: ['Noise', 'Pulser timing or motor control issue', 'Incorrect programming', 'Low battery'],
        correctAnswerIndex: 1,
        explanation: 'Inconsistent spacing indicates timing issues, not noise.'
      },
      {
        id: 's14q40',
        question: 'During post run extraction, memory shows a long period of no pulser activity. Real time data also stopped during that time. What is the most likely cause?',
        options: ['Gamma drift', 'Pulser stall or mechanical failure', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'No pulses in memory and real time indicates pulser failure.'
      },
      {
        id: 's14q41',
        question: 'During pre run QA/QC, the toolface is stable but the tool fails the pressure test. What should you do?',
        options: ['Run it', 'Identify and repair the leak before running', 'Increase survey interval', 'Change gamma scaling'],
        correctAnswerIndex: 1,
        explanation: 'Pressure test failures indicate sealing issues — never run the tool.'
      },
      {
        id: 's14q42',
        question: 'During post run diagnostics, shock logs show repeated high torsional spikes. What does this indicate?',
        options: ['Gamma drift', 'Stick slip or torsional vibration', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Torsional spikes indicate stick slip downhole.'
      },
      {
        id: 's14q43',
        question: 'During QA/QC, the tool communicates normally but memory logging cannot be enabled. What is the most likely cause?',
        options: ['Gamma drift', 'Memory module failure', 'Incorrect programming', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'If logging cannot be enabled, the memory module is likely faulty.'
      },
      {
        id: 's14q44',
        question: 'During post run reporting, you discover that the run ID in memory does not match the run ID in real time logs. What should you do?',
        options: ['Ignore it', 'Document the discrepancy and correct future programming', 'Change survey interval', 'Reprogram the tool immediately'],
        correctAnswerIndex: 1,
        explanation: 'Documentation is essential — mismatched IDs cause tracking issues.'
      },
      {
        id: 's14q45',
        question: 'Why is strict adherence to pre run and post run procedures essential for MWD operations?',
        options: ['To adjust mud weight', 'To ensure reliability, prevent failures, and maintain professional standards', 'To control ROP', 'To operate the drawworks'],
        correctAnswerIndex: 1,
        explanation: 'Consistent procedures ensure safe, reliable, professional operations.'
      }
    ]
  },
  {
    id: 'section-15',
    title: 'Final Assessment',
    content: `This is the final assessment for the MWD Pro curriculum. 

This comprehensive exam covers all 14 previous sections, including:
* Tool Physics & Mechanics
* Telemetry & Signal Processing
* Directional Drilling Fundamentals
* Drilling Dynamics & Vibration
* Gamma Ray & Formation Evaluation
* Field Scenarios & Troubleshooting
* Pre-Run & Post-Run Procedures
* Professional Excellence

> **Key Idea:** A passing score of 80% or higher is required to earn your digital Petro Academy MWD Pro Certification.`,
    quizQuestions: [
      {
        id: 's15q1',
        question: 'What is the most important asset of a professional MWD technician?',
        options: ['Their tool kit', 'Their integrity and reputation', 'Their laptop', 'Their fast ROP'],
        correctAnswerIndex: 1,
        explanation: 'Integrity and reliability are the foundations of a professional MWD technician’s role.'
      },
      {
        id: 's15q2',
        question: 'What should you do if you are unsure about the quality of a survey?',
        options: ['Send it anyway and hope for the best', 'Re-take the survey and consult with the DD or office support', 'Delete the survey and pretend it never happened', 'Tell the driller to stop drilling forever'],
        correctAnswerIndex: 1,
        explanation: 'Always verify data quality. Re-taking a survey or seeking expert advice is the correct professional response to uncertainty.'
      },
      {
        id: 's15q3',
        question: 'What is the primary goal of the MWD Pro curriculum?',
        options: ['To teach you how to drive a truck', 'To prepare you to be a competent and professional MWD field technician', 'To show you how to find oil with a stick', 'To replace the rig’s geologist'],
        correctAnswerIndex: 1,
        explanation: 'The MWD Pro curriculum is designed to provide a comprehensive foundation for a career as an MWD field technician.'
      },
      {
        id: 's15q4',
        question: 'Which trait defines a "high value" MWD hand?',
        options: ['Being the loudest on the rig floor', 'Understanding the bigger picture and supporting the DD proactively', 'Sleeping during the lateral', 'Never talking to the driller'],
        correctAnswerIndex: 1,
        explanation: 'A high-value hand understands directional drilling and anticipates operational needs.'
      },
      {
        id: 's15q5',
        question: 'Why is it critical to report vibration levels immediately?',
        options: ['To increase mud costs', 'To help the DD mitigate dysfunction and protect the BHA', 'To slow down the rig', 'To change the well plan'],
        correctAnswerIndex: 1,
        explanation: 'Early reporting allows for parameter adjustments that prevent tool damage.'
      },
      {
        id: 's15q6',
        question: 'What does "Gamma Ray Lag" refer to?',
        options: ['The time it takes to pulse data', 'The distance between the bit and the gamma sensor', 'A delay in battery power', 'The speed of the mud pumps'],
        correctAnswerIndex: 1,
        explanation: 'Gamma is measured at the tool, so there is a physical distance (lag) from the bit.'
      },
      {
        id: 's15q7',
        question: 'During a slide, what is a common cause of telemetry dropouts?',
        options: ['Low gamma counts', 'Increased vibration and motor stalls', 'High inclination', 'Low mud weight'],
        correctAnswerIndex: 1,
        explanation: 'Sliding often increases vibration and stalls, which disrupt the pulser.'
      },
      {
        id: 's15q8',
        question: 'What is the purpose of a "Bench Test"?',
        options: ['To clean the shack', 'To verify tool functionality on the surface before deployment', 'To test the rig’s engines', 'To measure the well depth'],
        correctAnswerIndex: 1,
        explanation: 'Bench testing catches issues before the tool goes in the hole.'
      },
      {
        id: 's15q9',
        question: 'How should you handle a request from a driller to "fix" a bad survey?',
        options: ['Do it to keep them happy', 'Refuse and report the data exactly as received', 'Ask the DD to do it', 'Delete the survey'],
        correctAnswerIndex: 1,
        explanation: 'Integrity means reporting the truth, even if it’s unpopular.'
      },
      {
        id: 's15q10',
        question: 'Which vibration type is most likely to damage pulser bearings?',
        options: ['Lateral', 'Axial (Bit Bounce)', 'Torsional', 'Magnetic'],
        correctAnswerIndex: 1,
        explanation: 'Axial vibration (bit bounce) creates high-impact forces on the tool string.'
      },
      {
        id: 's15q11',
        question: 'What does a sudden gamma drop in the lateral usually indicate?',
        options: ['Entering shale', 'Entering a clean reservoir sand or carbonate', 'Tool failure', 'High vibration'],
        correctAnswerIndex: 1,
        explanation: 'Reservoir zones typically show lower natural radioactivity.'
      },
      {
        id: 's15q12',
        question: 'What is the "Separation Factor" (SF) used for?',
        options: ['Separating oil from water', 'Anti-collision monitoring between wells', 'Calculating bit speed', 'Measuring mud density'],
        correctAnswerIndex: 1,
        explanation: 'SF is a critical metric for preventing wellbore collisions.'
      },
      {
        id: 's15q13',
        question: 'Why is "Operational Discipline" important?',
        options: ['To make the job harder', 'To ensure repeatable excellence and reliability', 'To impress the company man', 'To get more sleep'],
        correctAnswerIndex: 1,
        explanation: 'Following procedures consistently prevents avoidable failures.'
      },
      {
        id: 's15q14',
        question: 'What should you do if you find a damaged O-ring during pre-run inspection?',
        options: ['Use it anyway', 'Replace it immediately', 'Put grease on it and hope for the best', 'Tell the next shift about it'],
        correctAnswerIndex: 1,
        explanation: 'Damaged seals lead to washouts and tool failures.'
      },
      {
        id: 's15q15',
        question: 'How does MWD contribute to geosteering?',
        options: ['By driving the rig', 'By providing real-time gamma ray and survey data for correlation', 'By mixing the mud', 'By changing the bit'],
        correctAnswerIndex: 1,
        explanation: 'MWD data is the primary input for geosteering decisions.'
      },
      {
        id: 's15q16',
        question: 'What is the first step in diagnosing a decoding issue?',
        options: ['Replace the downhole tool', 'Check surface sensors and noise levels', 'Increase flow rate', 'Change the well plan'],
        correctAnswerIndex: 1,
        explanation: 'Most decoding issues start with surface noise or sensor configuration.'
      },
      {
        id: 's15q17',
        question: 'What does "Stick Slip" refer to?',
        options: ['A type of mud additive', 'Torsional vibration where the bit stops and then spins rapidly', 'The tool sliding into the hole', 'A battery failure'],
        correctAnswerIndex: 1,
        explanation: 'Stick slip is a common torsional dysfunction that damages tools.'
      },
      {
        id: 's15q18',
        question: 'Why is it important to monitor battery usage against the well plan?',
        options: ['To save money', 'To ensure the tool has enough power to reach TD', 'To increase ROP', 'To reduce vibration'],
        correctAnswerIndex: 1,
        explanation: 'Running out of battery downhole causes an expensive, unplanned trip.'
      },
      {
        id: 's15q19',
        question: 'What should be included in a professional MWD post-run report?',
        options: ['Only the good surveys', 'A complete summary of tool performance, data quality, and any failures', 'A list of rig crew complaints', 'The weather report'],
        correctAnswerIndex: 1,
        explanation: 'Comprehensive reporting is essential for operational improvement.'
      },
      {
        id: 's15q20',
        question: 'What is the significance of the "KOP" in a well plan?',
        options: ['Keep On Pumping', 'Kick-Off Point', 'Known Oil Pool', 'Key Operational Parameter'],
        correctAnswerIndex: 1,
        explanation: 'The KOP is where the well begins its directional build.'
      },
      {
        id: 's15q21',
        question: 'Which sensor is most sensitive to magnetic interference?',
        options: ['Accelerometer', 'Magnetometer', 'Gamma detector', 'Pressure transducer'],
        correctAnswerIndex: 1,
        explanation: 'Magnetometers measure the Earth’s magnetic field and are easily distorted by steel.'
      },
      {
        id: 's15q22',
        question: 'What does "SNR" stand for in telemetry?',
        options: ['Signal-to-Noise Ratio', 'Standard Normal Reading', 'Survey Next Run', 'Sensor Noise Reduction'],
        correctAnswerIndex: 0,
        explanation: 'SNR measures the strength of the signal relative to background noise.'
      },
      {
        id: 's15q23',
        question: 'What is the professional response to a downhole tool failure?',
        options: ['Blame the DD', 'Perform a thorough failure analysis and document all symptoms', 'Hide the data', 'Quit the job'],
        correctAnswerIndex: 1,
        explanation: 'Failures are learning opportunities that require detailed documentation.'
      },
      {
        id: 's15q24',
        question: 'How should you communicate with the driller during a survey?',
        options: ['Use long, complex sentences', 'Use clear, concise, standard rig terminology', 'Don’t talk to them at all', 'Shout over the radio'],
        correctAnswerIndex: 1,
        explanation: 'Clear communication ensures the driller knows exactly when to hold steady.'
      },
      {
        id: 's15q25',
        question: 'What is the benefit of "Multi-Station Analysis" (MSA)?',
        options: ['It makes surveys faster', 'It identifies and corrects for magnetic interference', 'It increases ROP', 'It cleans the mud'],
        correctAnswerIndex: 1,
        explanation: 'MSA is a powerful tool for improving survey accuracy in challenging environments.'
      },
      {
        id: 's15q26',
        question: 'Why is it important to maintain a clean and organized MWD shack?',
        options: ['To impress visitors', 'To ensure safety, efficiency, and professional standards', 'Because the company man said so', 'To reduce the rig’s fuel consumption'],
        correctAnswerIndex: 1,
        explanation: 'A clean workspace reflects a disciplined and professional mindset.'
      },
      {
        id: 's15q27',
        question: 'What does a "frozen" gamma channel usually indicate?',
        options: ['Cold mud', 'A sensor or electronics failure', 'Entering a hard formation', 'High ROP'],
        correctAnswerIndex: 1,
        explanation: 'Frozen data is a classic symptom of a subsystem crash or lockup.'
      },
      {
        id: 's15q28',
        question: 'What is the primary cause of "Whirl" in a BHA?',
        options: ['Low RPM', 'Lateral instability and high RPM', 'High mud weight', 'Low WOB'],
        correctAnswerIndex: 1,
        explanation: 'Whirl is a side-to-side lateral vibration often caused by high RPM.'
      },
      {
        id: 's15q29',
        question: 'Why is "Integrity" considered the foundation of MWD?',
        options: ['Because it’s a nice word', 'Because the entire multi-million dollar well depends on the accuracy of your data', 'To get a promotion', 'To avoid rig chores'],
        correctAnswerIndex: 1,
        explanation: 'Directional and geological decisions rely entirely on the truthfulness of MWD data.'
      },
      {
        id: 's15q30',
        question: 'What should you do if you notice a "Pump Harmonic" interfering with your signal?',
        options: ['Ignore it', 'Suggest a slight change in pump speed to move the harmonic', 'Turn off the pumps', 'Change the bit'],
        correctAnswerIndex: 1,
        explanation: 'Small changes in pump speed can often shift noise away from the signal frequency.'
      },
      {
        id: 's15q31',
        question: 'What is the purpose of a "Memory Dump"?',
        options: ['To clear the tool’s brain', 'To retrieve high-resolution data stored downhole for analysis', 'To reset the battery', 'To clean the sensors'],
        correctAnswerIndex: 1,
        explanation: 'Memory data provides a complete and accurate record of the run.'
      },
      {
        id: 's15q32',
        question: 'Which formation type is most likely to attenuate an EM signal?',
        options: ['Dry sand', 'Conductive shale or salt', 'Hard granite', 'Limestone'],
        correctAnswerIndex: 1,
        explanation: 'Conductive formations absorb electromagnetic energy, reducing signal range.'
      },
      {
        id: 's15q33',
        question: 'What is the role of the "Company Man" on the rig?',
        options: ['To drive the truck', 'The operator’s representative who oversees all rig operations', 'To cook the meals', 'To fix the MWD tool'],
        correctAnswerIndex: 1,
        explanation: 'The company man is the ultimate authority on the rig site.'
      },
      {
        id: 's15q34',
        question: 'Why is "Proactivity" better than "Reactivity"?',
        options: ['It’s faster', 'It prevents failures before they happen', 'It uses less battery', 'It’s easier'],
        correctAnswerIndex: 1,
        explanation: 'Identifying trends early allows for mitigation before a failure occurs.'
      },
      {
        id: 's15q35',
        question: 'What should you do if you find a serial number mismatch on your BHA tally?',
        options: ['Ignore it', 'Correct the tally and verify the physical tool', 'Change the survey interval', 'Tell the DD it’s fine'],
        correctAnswerIndex: 1,
        explanation: 'Accurate record-keeping is essential for tool tracking and failure analysis.'
      },
      {
        id: 's15q36',
        question: 'What is the benefit of "Shallow Hole Testing" (SHT)?',
        options: ['It cleans the bit', 'It verifies telemetry and sensor function before drilling deep', 'It tests the rig’s water supply', 'It measures the surface temperature'],
        correctAnswerIndex: 1,
        explanation: 'SHT ensures the tool is working in the wellbore before committing to the run.'
      },
      {
        id: 's15q37',
        question: 'How should you handle a situation where you are exhausted but need to perform a critical test?',
        options: ['Do it quickly and hope for the best', 'Stop, rest, or ask for help to ensure the test is done correctly', 'Skip the test', 'Drink more coffee and keep going'],
        correctAnswerIndex: 1,
        explanation: 'Fatigue leads to errors. Professionalism means knowing when you need help to maintain safety.'
      },
      {
        id: 's15q38',
        question: 'What does "DLS" stand for in directional drilling?',
        options: ['Deep Log Scale', 'Dog-Leg Severity', 'Drill Line Speed', 'Directional Log Summary'],
        correctAnswerIndex: 1,
        explanation: 'DLS measures the rate of change in the wellbore’s direction.'
      },
      {
        id: 's15q39',
        question: 'Why is "Continuous Learning" important for an MWD technician?',
        options: ['To get more certificates', 'Because technology and techniques are always evolving', 'To pass the time', 'To impress the driller'],
        correctAnswerIndex: 1,
        explanation: 'The industry changes rapidly; staying updated is key to a long career.'
      },
      {
        id: 's15q40',
        question: 'What is the "Professional MWD Mindset"?',
        options: ['Just doing what you’re told', 'Taking ownership of your data, your tools, and your role on the team', 'Being the first one to leave the rig', 'Never asking questions'],
        correctAnswerIndex: 1,
        explanation: 'Ownership and accountability are the hallmarks of a professional.'
      },
      {
        id: 's15q41',
        question: 'What should you do if you notice a "Magnetic Storm" warning?',
        options: ['Ignore it', 'Inform the DD and monitor survey QC closely for interference', 'Stop drilling immediately', 'Turn off the MWD tool'],
        correctAnswerIndex: 1,
        explanation: 'Magnetic storms can distort the Earth’s field and affect survey accuracy.'
      },
      {
        id: 's15q42',
        question: 'What is the purpose of a "JSA" (Job Safety Analysis)?',
        options: ['To write a story', 'To identify hazards and mitigate risks before starting a task', 'To measure the rig’s height', 'To check the mud weight'],
        correctAnswerIndex: 1,
        explanation: 'JSAs are critical for maintaining a safe working environment.'
      },
      {
        id: 's15q43',
        question: 'What is the ultimate goal of every MWD run?',
        options: ['To finish as fast as possible', 'To deliver high-quality data safely and reliably to TD', 'To use all the battery', 'To fill up the memory'],
        correctAnswerIndex: 1,
        explanation: 'Safe, reliable data delivery is the core mission of MWD.'
      },
      {
        id: 's15q44',
        question: 'How can you contribute to a positive rig culture?',
        options: ['By complaining about the food', 'By being helpful, professional, and reliable', 'By staying in your shack all day', 'By ignoring the rig crew'],
        correctAnswerIndex: 1,
        explanation: 'Professionalism and a team-oriented attitude improve the entire operation.'
      },
      {
        id: 's15q45',
        question: 'What does earning your "Petro Academy MWD Pro" certification represent?',
        options: ['That you are done learning', 'That you have a solid foundation of knowledge and are ready for professional field operations', 'That you can drive a rig', 'That you are a geologist'],
        correctAnswerIndex: 1,
        explanation: 'Certification marks the beginning of your journey as a professional technician.'
      }
    ]
  }
];

