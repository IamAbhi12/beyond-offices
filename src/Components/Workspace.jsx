import React, { useState, useRef } from "react";
import WorkspaceItem from "./WorkspaceItem";
import "./Workspace.css";

const WorkspaceFloor2 = (props) => {
  return (
    <div className="workspace-floor2">
      <div className="ws-item the-office" onClick={() => props.handler(6)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="383"
          height="342"
          viewBox="0 0 383 342"
          fill="none"
        >
          <path
            d="M343.406 0C346.554 0 349.105 2.66293 349.105 5.94783V184C349.105 187.314 346.419 190 343.105 190H250.77C247.583 190 245 192.583 245 195.77V247.23C245 250.417 247.583 253 250.77 253H341.23C341.776 253 342.304 252.924 342.805 252.783H377.3C380.448 252.783 383 255.445 383 258.73V336.052C383 339.337 380.448 342 377.3 342L5.69969 342C2.55184 342 0 339.337 0 336.052V5.94783C0 2.66294 2.55183 0 5.69968 0H343.406Z"
            fill="#10375C"
          />
        </svg>
        <div className="ws-name">The Office</div>
        <div className="ws-name-subtext">Cabins</div>
      </div>
      <div className="ws-item washroom" onClick={null}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="149"
          height="180"
          viewBox="0 0 149 180"
          fill="none"
        >
          <path
            d="M5.77 0C2.58332 0 0 2.58332 0 5.77V174.23C0 177.417 2.58332 180 5.77001 180H41.1374C44.3241 180 46.9074 177.417 46.9074 174.23V86.8387C46.9074 83.652 49.4907 81.0687 52.6774 81.0687H143.23C146.417 81.0687 149 78.4854 149 75.2987V5.77C149 2.58332 146.417 0 143.23 0H5.77Z"
            fill="#10375C"
          />
        </svg>
        <div className="ws-name">Washroom</div>
      </div>
      <div className="ws-item stationary no-svg" onClick={null}>
        <div className="ws-name">
          Station-<br></br>-ary
        </div>
      </div>
      <div className="ws-item reception no-svg" onClick={null}>
        <div className="ws-name">Reception</div>
      </div>
      <div
        className="ws-item calling-booths no-svg"
        onClick={() => props.handler(10)}
      >
        <div className="ws-name">Calling Booths</div>
      </div>
      <div className="ws-item pantry no-svg" onClick={null}>
        <div className="ws-name">Pantry</div>
      </div>
      <div className="ws-item lockers no-svg" onClick={null}>
        <div className="ws-name">Lockers</div>
      </div>
      <div
        className="ws-item community-tables no-svg"
        onClick={() => props.handler(4)}
      >
        <div className="ws-name">Community Tables</div>
      </div>
      <div
        className="ws-item phone-booth no-svg"
        onClick={() => props.handler(11)}
      >
        <div className="ws-name">Phone Booth</div>
      </div>
      <div
        className="ws-item semi-private-booths no-svg"
        onClick={() => props.handler(7)}
      >
        <div className="ws-name">Semi Private Booths</div>
      </div>
      <div
        className="ws-item pool-table no-svg"
        onClick={() => props.handler(8)}
      >
        <div className="ws-name">Pool Table</div>
      </div>
      <div className="ws-item gather no-svg" onClick={() => props.handler(10)}>
        <div className="ws-name">Gather</div>
        <div className="ws-name-subtext">Amphitheatre</div>
      </div>
      <div
        className="ws-item workstations no-svg"
        onClick={() => props.handler(6)}
      >
        <div className="ws-name">Workstations</div>
      </div>
      <div
        className="ws-item visiting-lounge no-svg"
        onClick={() => props.handler(5)}
      >
        <div className="ws-name">Visiting Lounge</div>
      </div>
    </div>
  );
};

const WorkspaceFloor3 = (props) => {
  return (
    <div className="workspace-floor3">
      <div
        className="ws-item conference-room no-svg"
        onClick={() => props.handler(3)}
      >
        <div className="ws-name">Conference Room</div>
      </div>
      <div className="ws-item meeting-rooms no-svg" onClick={null}>
        <div className="ws-name">Meeting Rooms</div>
      </div>
      <div
        className="ws-item workstations1 no-svg"
        onClick={() => props.handler(6)}
      >
        <div className="ws-name">Workstations</div>
      </div>
      <div className="ws-item lavatory" onClick={null}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="167"
          height="190"
          viewBox="0 0 167 190"
          fill="none"
        >
          <path
            d="M6.18225 0.441406C2.99765 0.441406 0.416016 3.02303 0.416016 6.20764V183.519C0.416016 186.704 2.99764 189.286 6.18225 189.286H46.8395C50.0242 189.286 52.6058 186.704 52.6058 183.519V91.2596C52.6058 88.075 55.1874 85.4934 58.372 85.4934H160.429C163.614 85.4934 166.195 82.9118 166.195 79.7271V6.20764C166.195 3.02304 163.614 0.441406 160.429 0.441406H6.18225Z"
            fill="#10375C"
          />
        </svg>
        <div className="ws-name">Lavatory</div>
      </div>
      <div
        className="ws-item community-table no-svg"
        onClick={() => props.handler(4)}
      >
        <div className="ws-name">Community Table</div>
      </div>
      <div className="ws-item art-cafe no-svg" onClick={() => props.handler(2)}>
        <div className="ws-name">Art Cafe</div>
      </div>
      <div className="ws-item cats no-svg" onClick={() => props.handler(0)}>
        <div className="ws-name">Cafe</div>
      </div>
      <div className="ws-item business-lounge" onClick={() => props.handler(3)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="257"
          height="194"
          viewBox="0 0 257 194"
          fill="none"
        >
          <path
            d="M5.76624 0C2.58163 0 0 2.58163 0 5.76624V188.234C0 191.418 2.58163 194 5.76623 194H183.374C186.559 194 189.14 191.418 189.14 188.234V65.9731C189.14 62.7885 191.722 60.2069 194.907 60.2069H251.234C254.418 60.2069 257 57.6253 257 54.4407V5.76624C257 2.58163 254.418 0 251.234 0H5.76624Z"
            fill="#10375C"
          />
        </svg>
        <div className="ws-name">Business Lounge</div>
      </div>
      <div className="ws-item library no-svg" onClick={() => props.handler(14)}>
        <div className="ws-name">Library</div>
      </div>
      <div
        className="ws-item workstations2 no-svg"
        onClick={() => props.handler(3)}
      >
        <div className="ws-name">Workstations</div>
      </div>
      <div className="ws-item recording-room no-svg" onClick={null}>
        <div className="ws-name">Recording Room</div>
      </div>
      <div
        className="ws-item sleeping-pods no-svg"
        onClick={() => props.handler(12)}
      >
        <div className="ws-name">Sleeping Pods</div>
      </div>
    </div>
  );
};

const workspaces = [
  {
    key: "1",
    id: "cafe",
    name: "Cafe",
    picture: "/images/workspaces/cafe.png",
    description:
      "Enjoy high-speed Wi-Fi and a premium all-vegetarian menu featuring fancy coffees, pizzas, and burgers. Ideal for both work and relaxation.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "16",
        description: "Seating Capacity",
      },
      {
        icon: "/icons/icon14.svg",
        highlight: "Premium",
        description: "Cafe Menu",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet Speed",
      },
      {
        icon: "/icons/icon15.svg",
        highlight: "All-Veg",
        description: "Fancy Menu (coffees, pizzas, burgers) ",
      },
    ],
  },
  {
    key: "3",
    id: "art-cafe",
    name: "Art Cafe",
    picture: "/images/workspaces/artcafe.png",
    description:
      "Charming brick walls and a vibrant artsy area filled with inspiring artwork. Perfect for art lovers and coffee enthusiasts, our café offers a unique, cozy atmosphere for relaxation and creativity.",
    features: [
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
      {
        icon: "/icons/icon7.svg",
        highlight: "Warm",
        description: "Natural Lighting",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon10.svg",
        highlight: "Washroom",
        description: "Inclusive layout",
      },
    ],
  },
  {
    key: "4",
    id: "business-lounge",
    name: "Business Lounge",
    picture: "/images/workspaces/businesslounge.png",
    description:
      "Our business lounge is designed to offer a comfortable and professional environment with an old English look, dark veneer, brown leather sofa and chairs",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "12",
        description: "Seating Capacity",
      },
      {
        icon: "/icons/icon14.svg",
        highlight: "Premium",
        description: "Seating (access to library)",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
    ],
  },
  {
    key: "5",
    id: "conference-room",
    name: "Conference Room",
    picture: "/images/workspaces/conference.png",
    description:
      "Our conference room is equipped with state-of-the-art technology, comfortable seating, and a professional atmosphere, making it perfect for meetings, presentations, and workshops.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "25",
        description: "Seating Capacity",
      },
      {
        icon: "/icons/icon11.svg",
        highlight: "Interactive",
        description: "Panel with lacquered glass whiteboard",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "6",
    id: "community-tables",
    name: "Community Tables",
    picture: "/images/workspaces/community.png",
    description:
      "Collaborate and connect with fellow professionals at our community tables, designed to foster networking and idea-sharing in a vibrant workspace.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "34",
        description: "Registered seating",
      },
      {
        icon: "/icons/icon7.svg",
        highlight: "Warm",
        description: "Natural Lighting",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "7",
    id: "visiting-lounge",
    name: "Visiting Lounge",
    picture: "/images/workspaces/visiting.png",
    description:
      "Welcome guests and clients in our inviting visiting lounge, designed for informal meetings and relaxation in between work sessions.",
    features: [
      {
        icon: "/icons/icon9.svg",
        highlight: "AC",
        description: "Cooling System",
      },
      {
        icon: "/icons/icon2.svg",
        highlight: "Open",
        description: "Space structure",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "8",
    id: "workstations",
    name: "Workstations",
    picture: "/images/workspaces/workstations.png",
    description:
      "Embrace flexibility and productivity at our open workstations, offering a modern and spacious environment for individual or group work.",
    features: [
      {
        icon: "/icons/icon9.svg",
        highlight: "AC",
        description: "Cooling System",
      },
      {
        icon: "icons/icon10.svg",
        highlight: "Washroom",
        description: "Inclusive layout",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "9",
    id: "semi-private-booths",
    name: "Semi Private Booths",
    picture: "/images/workspaces/semibooth.png",
    description:
      "Find the perfect balance of privacy and collaboration in our semi-private booths, ideal for focused work or small group discussions.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "8",
        description: "Privacy Seating",
      },
      {
        icon: "/icons/icon7.svg",
        highlight: "Warm",
        description: "Natural Lighting",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "10",
    id: "pool-table",
    name: "Pool Table",
    picture: "/images/workspaces/pool.png",
    description:
      "Our pool table area is perfect for relaxation and socialising, offering a fun and vibrant space for members to unwind and connect.",
    features: [
      {
        icon: "/icons/icon20.svg",
        highlight: "4",
        description: "Playing Capacity",
      },
      {
        icon: "/icons/icon18.svg",
        highlight: "Standard",
        description: "Equipments",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "11",
    id: "amphitheatre",
    name: "Amphitheatre",
    picture: "/images/workspaces/amphitheatre.png",
    description:
      " Immerse yourself in our indoor amphitheatre or oasis, a versatile space for events, presentations, or simply unwinding in a tranquil setting.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "30",
        description: "Seating Capacity",
      },
      {
        icon: "/icons/icon11.svg",
        highlight: "Screen",
        description: "For Presentations",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "12",
    id: "calling-booths",
    name: "Calling Booths",
    picture: "/images/workspaces/calling.png",
    description:
      "Utilise our calling station for important phone calls or video conferences, providing a comfortable and professional space for communication.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "6",
        description: "Calling Stations",
      },
      {
        icon: "/icons/icon12.svg",
        highlight: "Private",
        description: "Setting for Quick Calls",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "13",
    id: "phone-booth",
    name: "Phone Booth",
    picture: "/images/workspaces/phone.png",
    description:
      "Conduct private phone calls or video conferences in our dedicated phone booth, ensuring professional communication in a quiet setting.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "1",
        description: "Seating Capacity",
      },
      {
        icon: "/icons/icon10.svg",
        highlight: "Washroom",
        description: "Inclusive layout",
      },
      {
        icon: "/icons/icon7.svg",
        highlight: "Warm",
        description: "Natural Lighting",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "14",
    id: "sleeping-pods",
    name: "Sleeping Pods",
    picture: "/images/workspaces/sleeping.png",
    description:
      "Our sleeping pods are designed for relaxation and rejuvenation, offering a comfortable and private space for naps and breaks during the workday.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "3",
        description: "Sleeping Capacity",
      },
      {
        icon: "icons/icon16.svg",
        highlight: "Calm",
        description: "Environment",
      },
      {
        icon: "icons/icon17.svg",
        highlight: "Charging",
        description: "Points For Gadgets",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
  {
    key: "15",
    id: "library",
    name: "Library",
    picture: "/images/workspaces/library.png",
    description:
      "Our library is a quiet and peaceful space for reading and research, offering a cozy and comfortable environment for learning and relaxation.",
    features: [
      {
        icon: "/icons/icon1.svg",
        highlight: "15",
        description: "Seating Capacity",
      },
      {
        icon: "/icons/icon19.svg",
        highlight: "Different",
        description: "Genres (romance, history, sci-fi, self-help)",
      },
      {
        icon: "/icons/icon8.svg",
        highlight: "Food & Bev",
        description: "Chai and Coffee Station",
      },
      {
        icon: "/icons/icon5.svg",
        highlight: "500 Mbps",
        description: "Internet speed",
      },
    ],
  },
];

function Workspace() {
  const [floorNum, setFloorNum] = useState(2);
  const listRef = useRef(null);

  const changeFloor = () => {
    floorNum === 2 ? setFloorNum(3) : setFloorNum(2);
  };

  const svg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="27"
      viewBox="0 0 168 27"
      fill="none"
    >
      <g className="ws-yellow-arrow" onClick={changeFloor}>
        <path
          d="M0.448429 11.7258L9.6525 0.537104C9.94822 0.179064 10.3179 4.00543e-05 10.6875 4.00543e-05C11.0572 4.00543e-05 11.4268 0.179064 11.7225 0.537104C12.3139 1.25318 12.3139 2.37206 11.7225 3.08813L5.03198 11.2335H26.6191C27.4323 11.2335 28.0977 12.0391 28.0977 13.0237C28.0977 14.0083 27.4323 14.8139 26.6191 14.8139H5.03198L11.7225 22.9593C12.3139 23.6754 12.3139 24.7942 11.7225 25.5103C11.1311 26.2264 10.207 26.2264 9.61555 25.5103L0.411451 14.3216C-0.143013 13.5608 -0.142998 12.3971 0.448429 11.7258Z"
          fill="#DC913F"
        />
        <rect
          x="91.6855"
          y="15.2166"
          width="88.7142"
          height="4.47534"
          rx="2.23767"
          transform="rotate(180 91.6855 15.2166)"
          fill="#DC913F"
        />
      </g>
      <g className="ws-grey-arrow">
        <path
          d="M167.237 11.7258L158.033 0.537104C157.737 0.179064 157.368 4.00543e-05 156.998 4.00543e-05C156.628 4.00543e-05 156.259 0.179064 155.963 0.537104C155.372 1.25318 155.372 2.37206 155.963 3.08813L162.654 11.2335H141.066C140.253 11.2335 139.588 12.0391 139.588 13.0237C139.588 14.0083 140.253 14.8139 141.066 14.8139H162.654L155.963 22.9593C155.372 23.6754 155.372 24.7942 155.963 25.5103C156.554 26.2264 157.479 26.2264 158.07 25.5103L167.274 14.3216C167.829 13.5608 167.829 12.3971 167.237 11.7258Z"
          fill="#9A9A9A"
        />
        <rect
          width="50"
          height="4.00159"
          rx="2.00079"
          transform="matrix(1 0 0 -1 115 15.0042)"
          fill="#9A9A9A"
        />
      </g>
    </svg>
  );

  const svg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="27"
      viewBox="0 0 168 27"
      fill="none"
    >
      <g className="ws-yellow-arrow" onClick={changeFloor}>
        <path
          d="M167.237 11.7258L158.033 0.537104C157.737 0.179064 157.368 4.00543e-05 156.998 4.00543e-05C156.628 4.00543e-05 156.259 0.179064 155.963 0.537104C155.372 1.25318 155.372 2.37206 155.963 3.08813L162.654 11.2335H141.066C140.253 11.2335 139.588 12.0391 139.588 13.0237C139.588 14.0083 140.253 14.8139 141.066 14.8139H162.654L155.963 22.9593C155.372 23.6754 155.372 24.7942 155.963 25.5103C156.554 26.2264 157.479 26.2264 158.07 25.5103L167.274 14.3216C167.829 13.5608 167.829 12.3971 167.237 11.7258Z"
          fill="#DC913F"
        />
        <rect
          width="88.7142"
          height="4.47534"
          rx="2.23767"
          transform="matrix(1 0 0 -1 76 15.2166)"
          fill="#DC913F"
        />
      </g>
      <g className="ws-grey-arrow">
        <path
          d="M0.448429 11.7258L9.6525 0.537104C9.94822 0.179064 10.3179 4.00543e-05 10.6875 4.00543e-05C11.0572 4.00543e-05 11.4268 0.179064 11.7225 0.537104C12.3139 1.25318 12.3139 2.37206 11.7225 3.08813L5.03198 11.2335H26.6191C27.4323 11.2335 28.0977 12.0391 28.0977 13.0237C28.0977 14.0083 27.4323 14.8139 26.6191 14.8139H5.03198L11.7225 22.9593C12.3139 23.6754 12.3139 24.7942 11.7225 25.5103C11.1311 26.2264 10.207 26.2264 9.61555 25.5103L0.411451 14.3216C-0.143013 13.5608 -0.142998 12.3971 0.448429 11.7258Z"
          fill="#9A9A9A"
        />
        <rect
          x="52.6855"
          y="15.0042"
          width="50"
          height="4.00159"
          rx="2.00079"
          transform="rotate(-180 52.6855 15.0042)"
          fill="#9A9A9A"
        />
      </g>
    </svg>
  );

  const scrollToIndex = (index) => {
    const wsItemList = listRef.current;
    console.log(wsItemList);
    const wsItem = wsItemList?.querySelectorAll(".ws-item-container")[index];
    console.log(wsItem);
    wsItem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="workspaces">
      <div className="workspace1">
        <div className="floor-number">{`Floor ${floorNum}`}</div>
        <div className="workspace-map">
          {floorNum === 2 ? (
            <WorkspaceFloor2 handler={scrollToIndex} />
          ) : floorNum === 3 ? (
            <WorkspaceFloor3 handler={scrollToIndex} />
          ) : null}
        </div>
        <div className="navigation">
          <div className={`nav-item ${floorNum === 2 ? "faded-item" : ""}`}>
            Floor 2
          </div>
          <div className="ws-arrows">{floorNum === 2 ? svg2 : svg1}</div>
          <div className={`nav-item ${floorNum === 3 ? "faded-item" : ""}`}>
            Floor 3
          </div>
        </div>
      </div>
      <div className="ws-items-list" ref={listRef}>
        {workspaces.map((workspace) => (
          <WorkspaceItem
            key={workspace.key}
            id={workspace.id}
            name={workspace.name}
            picture={workspace.picture}
            description={workspace.description}
            features={workspace.features}
          />
        ))}
      </div>
    </div>
  );
}

export default Workspace;
