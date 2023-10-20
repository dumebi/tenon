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
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import service7 from "../assets/service7.png";
import service8 from "../assets/service8.png";

export const Arrays = {
  gallery_images: [image1, image2, image3, image4, image5, image6, image7],
  service_images: [
    service4,
    service8,
    service1,
    service3,
    service7,
    service5,
    service6,
    service2,
  ],
  tenon_about: [
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

  tenon_commitment: [
    {
      header: "Fast and Flexible Solutions",
      svg: solutionIcon,
      text: "Our services are designed to adapt to your evolving needs. ",
    },
    {
      header: "Cost-Optimized Approaches",
      svg: communicationIcon,
      text: "We prioritize efficiency without compromising quality. ",
    },
    {
      header: "Bespoke Solutions",
      svg: timerIcon,
      text: "Tailored to your unique requirements. ",
    },
    {
      header: "User-Friendly Experience",
      svg: globalIcon,
      text: "We ensure that working with us is straightforward and seamless.",
    },
  ],

  tenon_features: [
    {
      header: "Freight forwarding",
      svg: freightIcon,
      card_info: {
        svg: bikeIcon,
        header: "Logistics",
        text: "Tenon Logistics operates a hybrid logistics model suitable for movement of cargo in and out of the country as well as movements within the country. This model enhances cargo delivery efficiency as we take advantage of the vast and interwoven network of water and land resources across the country.",
      },
      detailedInfo: {
        header: "Air freight",
        text: "Tenon Logistics works with carefully selected airlines with world class services for cargo delivery thus ensuring that deadlines for project executions are met with a team of dedicated logistics experts monitoring the entire process.  ",
        header_two: "Ocean freight",
        text_two:
          "Our company delights in ensuring that client cargos are shipped timely and efficiently in manners that do not add extra cost to the client by working with world class shipping lines regionally and globally.  ",
        header_three: "Rail freight",
        text_three:
          "Tenon Logistics operates various hybrid logistics solutions combining different solutions. We  aspire to latch onto the nations railway network for the movement of cargos across the nation upon regulatory approval.",
      },
    },

    {
      header: "Haulage",
      svg: haulageIcon,
      card_info: {
        svg: procurementIcon,
        header: "Integrated project procurement",
        text: "Given our specialty in procurement related activities, Tenon Logistics specializes in seamless and timely procurement and delivery of cost efficient and fit for purpose materials and equipments from reputable global and local brands with keen interest in quality to our clients.",
      },
      detailedInfo: {
        header: "Barging",
        text: "Nigeria is blessed with vast waterways cutting across the entire nation thus making maritime transportation of bulk cargo using cargo suitable barges most desirable to our clients. Our team of expert marine transport personnel are deployed to ensure that cargo transportation is done safely and promptly through adequate stakeholder engagement. The barging model saves our client from exposure to claims for demurrage at ports.  ",
        header_two: "Trucking",
        text_two:
          "Taking advantage of our road networks, Tenon Logistics Limited has invested and acquired various types of trucks suitable for all kinds of cargo delivery with the supervision of our dedicated transportation team.  ",
      },
    },

    {
      header: "Haulage",
      svg: haulageIcon,
      card_info: {
        svg: warehouseIcon,
        header: "Warehousing",
        text: "Given our specialty in procurement related activities, Tenon Logistics specializes in seamless and timely procurement and delivery of cost efficient and fit for purpose materials and equipments from reputable global and local brands with keen interest in quality to our clients.",
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
