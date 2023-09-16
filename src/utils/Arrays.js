import solutionIcon from "../assets/svg/Solution.svg";
import communicationIcon from "../assets/svg/Communication.svg";
import timerIcon from "../assets/svg/Timer.svg";
import globalIcon from "../assets/svg/Global.svg";
import bikeIcon from "../assets/svg/Bike.svg";
import freightIcon from "../assets/svg/Freight.svg";
import procurementIcon from "../assets/svg/Product-procurement.svg";
import haulageIcon from "../assets/svg/Haulage.svg";
import warehouseIcon from "../assets/svg/warehousing.svg";
import image1 from "../assets/gallery/Rectangle 2.png";
import image2 from "../assets/gallery/Rectangle 3.png";
import image3 from "../assets/gallery/Rectangle 4.png";
import image4 from "../assets/gallery/image3.png";
import image5 from "../assets/gallery/image4.png";
import image6 from "../assets/gallery/image5.png";
import image7 from "../assets/gallery/image6.png";

export const Arrays = {
  gallery_images: [image1, image2, image3, image4, image5, image6, image7],
  tenon_about: [
    {
      header: "One-Stop Solution",
      svg: solutionIcon,
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
    {
      header: "Great customer experience",
      svg: communicationIcon,
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
    {
      header: "Real time reporting",
      svg: timerIcon,
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
    {
      header: "Global solutions",
      svg: globalIcon,
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
  ],

  tenon_features: [
    {
      header: "Freight forwarding",
      svg: freightIcon,
      card_info: {
        svg: bikeIcon,
        header: "Logistics",
        text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
      },
      detailedInfo: {
        header: "Air freight",
        text: "With a relentless focus on efficiency, reliability,",
        header_two: "Ocean freight",
        text_two: "With a relentless focus on efficiency, reliability,",
      },
    },

    {
      header: "Haulage",
      svg: haulageIcon,
      card_info: {
        svg: procurementIcon,
        header: "Integrated project procurement",
        text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
      },
      detailedInfo: {
        header: "Barging",
        text: "With a relentless focus on efficiency, reliability,",
        header_two: "Trucking",
        text_two: "With a relentless focus on efficiency, reliability,",
      },
    },

    {
      header: "Haulage",
      svg: haulageIcon,
      card_info: {
        svg: warehouseIcon,
        header: "Warehousing",
        text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
      },
    },
  ],
  rateOptions: ["MSC", "MSC", "MSC", "MSC", "MSC", "MSC", "MSC", "MSC", "MSC"],

  faqData: [
    {
      question: "What do you do at Tenon Logistics?",
      answer:
        "Tenon Logistics is a supply chain Management Solutions services provider which renders services such as Logistics, Warehousing, Haulage, Freight-Forwarding, Customs Clearance and Integrated Project Management.",
    },
    {
      question: "How Long does it take to book your services?",
      answer:
        "Tenon Logistics prides itself on how quickly its personnel initiates, executes and close out operations. As a matter of policy, it takes a maximum of 24 hours upon conclusion of negotiations to initiate operations.",
    },
    {
      question: "Are your rates final?",
      answer:
        "Rates displayed on our platforms are estimated as final rates are subject to full disclosure of material information and conclusion of negotiations.",
    },
    {
      question: "Are your services insured?",
      answer:
        "As a company we have a policy of zero accidents/incidents. However as a preemptive and protective measure, all our services are insured, and we continue to upgrade our insurance coverage on a need basis.",
    },
    {
      question: "How experienced are your drivers?",
      answer:
        "As a matter of policy, our company prides itself in the thorough process with which drivers and other staff are employed. As a matter of policy also, our fleet operators our mandatorily subjected to routine training and retraining on various important subjects for optimization and efficiency.",
    },
    {
      question: "Who is a Tenon Logistics Agent and How do I become an Agent?",
      answer:
        "An agent is any person who attracts clients or patronage of Tenon Logistics for a commission. To become a Tenon Logistics registered agent, the interested person must be registered and given a unique code. To become an agent click [insert hyperlink].",
    },
    {
      question:
        "Can I list my asset under Tenon Logistics for trade Partnership?",
      answer:
        "Tenon Logistics welcomes all forms of profitable collaborations. We welcome the listing of assets such as Trucks, Warehouses, Jetties etc. subject to contract.",
    },
  ],
};
