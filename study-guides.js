// Study guides — plain-English reading for each MP, written from the verbatim
// SOP text in work/mp-204.08-204.13.txt (Phoenix Fire Department SOPs,
// Volume II, MPs 204.08-204.13, Revised 01/2026). Every bullet comes from
// the MP itself — no invented facts, no numbers that are not in the text.
var TRT_GUIDES = [
  {
    "mp": "204.08",
    "title": "Confined Space Rescue",
    "intro": "Confined space rescue is about getting someone out of a place that was never meant for people to stay in — a tank, vault, pipe or tunnel — without becoming a second victim. The MP runs the incident in four phases (Arrival, Pre-entry, Entry, Termination) and puts air monitoring, permits and a back-up plan at the center of everything.",
    "points": [
      "OSHA Standard 29 CFR 1910.146, Permit-Required Confined Spaces, is the basis for confined space rescue operations.",
      "A confined space is defined by three traits: large enough for personnel to physically enter, not designed for continuous employee occupancy, and limited entry and egress.",
      "Examples include caverns, tunnels, pipes, tanks, mine shafts and utility vaults — basements and attics can count too.",
      "The Risk Management Profile applies to every confined space operation and is continuously re-assessed throughout the incident.",
      "The first arriving company officer assumes Command, begins an immediate size-up, isolates the hazard area and denies entry to all non-rescue personnel.",
      "The first TRT unit staffed with a TRT Company Officer takes Rescue Sector, and that officer stays with the crew.",
      "A Safety Officer and a Technical Advisor must both be in place before any rescue plan proposed by Rescue Sector is implemented.",
      "A confined space permit is required when the space has atmospheric hazards, an engulfment hazard, a configuration hazard, or any other recognized hazard.",
      "Atmospheric monitoring is continuous, with readings reported to Rescue Sector at least every 5 minutes — done by a HazMat unit, testing oxygen, flammability and toxicity.",
      "SABA is the breathing apparatus of choice. If SCBA must be used, stay in line of sight and exit before the low-air alarm, following the 75%-25% rule.",
      "Minimum PPE: helmet, gloves, proper footwear, goggles, turnouts / Nomex or PBI jumpsuit, and a class III harness.",
      "A retrieval system with a back-up system must be readied and in place, with a minimum of a 2:1 mechanical advantage."
    ]
  },
  {
    "mp": "204.09",
    "title": "Trench Rescue Operations",
    "intro": "Trench rescue is a race against a second collapse. The MP sets strict distances for apparatus, staging and civilians, requires the trench to be made safe with shoring before anyone goes in, and says flat out that no one enters an unsafe trench.",
    "points": [
      "OSHA Standard 29 CFR 1926 Subpart P is the basis for emergency trench rescue operations.",
      "An excavation is any depression, hole, trench or earth wall, man-made or natural, 4 feet or greater.",
      "Department policy: NO personnel shall be allowed into an unsafe trench or excavation.",
      "Collapses usually come from unstable soil combined with improper or inadequate shoring — and a second collapse can happen at any time, from removing soil, weight near the edge, vibration, rain, or simply the passage of time.",
      "Apparatus stays at least 50 feet from the trench failure, and Level 1 staging takes place at least 150 feet away.",
      "The hazard zone perimeter is 50 feet from the collapse area, and non-essential civilians go at least 150 feet away.",
      "Shut down the roadway, stage apparatus 150 feet out, re-route non-essential traffic 300 feet away, and shut down heavy equipment operating within 300 feet.",
      "Approach the trench from the ends if possible. Check the spoil pile for improper angle of repose and raveling, and place ground pads around the lip of the trench.",
      "Place at least 2 ingress and egress ladders into the trench, no more than 50 feet apart. Shoring is hydraulic, pneumatic or timber.",
      "Work the dirt from a safe zone in the non-collapsed area, and uncover a collapsed victim to below the diaphragm using small shovels, buckets or by hand.",
      "At termination the shoring system comes out last-in / first-out."
    ]
  },
  {
    "mp": "204.10",
    "title": "Mountain Rescue Operations",
    "intro": "Mountain rescue covers rope rescues on slopes and cliffs, plus helicopter operations. The MP splits rescues into non-technical (under 40 degrees) and technical (40 to 90 degrees, TRT only) and builds the plan around the least risk that still gets the job done.",
    "points": [
      "Rope rescue is any rescue that requires rope and/or rope systems to safely gain access to, and remove patients from, hazardous areas with limited access.",
      "Non-technical rescues are under 40 degrees — most first-responders have the equipment and training to do them. Technical rescues are 40 to 90 degrees and are performed by rescuers trained to TRT level.",
      "Rope rescue techniques and equipment follow NFPA 1670, NFPA 1006 and NFPA 1983.",
      "The first arriving company officer assumes Command and ascends the mountain with medical equipment to treat any victim.",
      "Size-up: secure a witness or park ranger. With no witnesses and no other source of information, consider calling a police helicopter (Firebird) to locate the victim.",
      "The rescue plan uses the least amount of risk to rescuers that is necessary to affect the rescue — low-risk operations first, and high-risk calls are decided by Rescue Sector, Safety, Command and the Technical Advisor together.",
      "A back-up plan must be in place before rescue operations are initiated.",
      "Helicopter operations are high-risk: weigh the patient's condition, difficult access, difficult terrain, time of day and environmental effects. A rescue-qualified pilot must be available, and the Pilot In Command has the final say on if and how the helicopter is used.",
      "Establish a Base LZ (assigned to a TRT unit) and a Mountain LZ in designated mountain locations (TRT personnel on the mountain).",
      "Rescuers stay \u201con-rope\u201d and \u201ctied-in\u201d when operating near an edge, and victims are secured in a harness or litter so they cannot fall out if inverted."
    ]
  },
  {
    "mp": "204.11",
    "title": "Water Rescue Operations",
    "intro": "Water rescue runs on a ladder of risk — talk, reach, throw, wade, helo, row, go — always starting with the lowest-risk option that can work. The MP also covers the PPE, upstream and downstream assignments, and the special case of SRP canals.",
    "points": [
      "Everyone operating at or near the water wears at minimum a personal flotation device (PFD), an approved water rescue helmet and approved footwear.",
      "Hazards to identify include the volume of water, the velocity of the water, debris, hydraulics, and the depth of the water — rising or falling.",
      "Assign personnel upstream to warn Rescue Sector of upstream hazards, and downstream with throw bags to catch anyone washed downstream.",
      "Non-essential civilians go at least 150 feet away from the hazard zone.",
      "The rescue order, low risk to high risk: TALK, REACH, THROW, WADE, HELO, ROW, GO.",
      "TALK: if the water is calm or slow moving, try to talk the victim into self-rescue.",
      "REACH: extend an arm, pike pole, rescue hook or any similar object to reach the victim and pull them from the water.",
      "THROW: throw the victim a throw-bag rescue line or other approved flotation device, then pendulum-belay or haul them to the bank.",
      "WADE: enter the water as a team, facing upstream and no further than knee deep, taking a PFD and helmet for each victim.",
      "HELO: decided through consultation with Rescue Sector, Safety, Command and the Technical Advisor. A rescue-qualified pilot must be available, and the Pilot In Command has the final say.",
      "GO is the last resort and very high-risk — TRT personnel only, briefed on the plan, back-up plan and emergency procedures. Never attach to a lifeline without an approved quick-release, and never do a breath-hold surface dive to locate a victim.",
      "For SRP canals and laterals, call the 24-hour Association Dispatch Center (ADC) at 602-236-5296 with the closest cross streets — they can provide gate control and other useful information."
    ]
  },
  {
    "mp": "204.12",
    "title": "Structural Collapse Rescue",
    "intro": "Structural collapse is a campaign incident, not a quick grab. The MP builds a full command structure around it — Lobby, Treatment, Building Triage, Search and Rescue teams — and leans on AZ-TF1, the FEMA task force Phoenix sponsors.",
    "points": [
      "Phoenix Fire is the sponsoring agency of AZ-TF1, one of 28 FEMA Urban Search & Rescue task forces in the nation.",
      "Command must take strong control early — unorganized civilian volunteer rescue efforts make the scene unsafe for volunteers and rescuers alike.",
      "Spot apparatus outside any potential secondary collapse zone.",
      "Hazards include secondary collapse, explosion and fire, broken gas and water lines, energized electrical lines, and falling debris.",
      "Non-essential civilians go at least 150 feet from the hazard zone perimeter. Consider Level 2 staging and heavy machinery such as cranes and front-end loaders.",
      "Lobby Sector controls the flow and personnel accountability of rescue personnel in the collapse area.",
      "The Building Triage team is a TRT member trained in shoring, a structural engineer, and a HazMat Technician — they assess structural integrity and hazards and use a building marking system to show their findings.",
      "The Search team uses TRT personnel, specialized search equipment such as search cameras and acoustic listening devices, and search canines with their handlers when available.",
      "Remove surface victims and the \u201cwalking wounded\u201d first, then get a personnel accountability report (PAR) and pull all non-TRT personnel out of the collapse area before TRT operations begin.",
      "Search and Rescue teams never enter a building judged structurally unsafe until shoring and stabilization measures have been taken.",
      "A collapse can hide a confined space — its atmosphere must be monitored by a qualified HazMat Technician, and if entry is needed for a viable victim, follow M.P. 204.08 Confined Space Rescue."
    ]
  },
  {
    "mp": "204.13",
    "title": "Tree Rescue Operations",
    "intro": "Tree rescue is a low-frequency, high-risk call with the victim stuck up a tree. The MP works a low-to-high risk order — self-rescue, aerial platform, ground ladders, and only then climbing — and the climb itself is TRT-only.",
    "points": [
      "Establish a hazard zone perimeter 50 feet around the tree, and move non-essential civilians at least 150 feet away.",
      "Watch for electrical lines in the vicinity and for falling debris, branches or tree skirt — a particular problem in windy conditions.",
      "The rescue order, low risk to high risk: Self-rescue, Aerial Platform Ladder Truck, Ground Ladders, Climb the Tree.",
      "Self-rescue: place a ground ladder or aerial platform ladder under the victim and coach them to climb down.",
      "Aerial platform: consider power lines hidden in the tree, the angle of the ladder, and how far the ladder needs to extend to reach the victim.",
      "Ground ladders: the first goes under the victim, the second alongside and slightly above — both secured to the tree with webbing or a small piece of rope.",
      "Climbing is the last resort and high-risk — only trained TRT members with approved equipment, with two rescuers assigned to climb and affect the rescue.",
      "One rescuer climbs above and to the side of the victim to establish an attachment point for a lowering system; the other climbs to the victim and captures them onto an approved rescue harness.",
      "On the ground, establish an approved anchor and lowering system, disentangle the victim — which may include cutting away the system they used to climb — and lower them to the ground.",
      "On reaching the victim, complete a primary survey and determine the exact method of entrapment."
    ]
  }
];
