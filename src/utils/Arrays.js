import solutionIcon from "../assets/svg/Solution.svg";
import communicationIcon from "../assets/svg/Communication.svg";
import timerIcon from "../assets/svg/Timer.svg";
import globalIcon from "../assets/svg/Global.svg";
import bikeIcon from "../assets/svg/Bike.svg";
// import quality from "../assets/svg/Quality.svg";
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
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery10 from "../assets/gallery10.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
// import gallery12 from "../assets/gallery12.png";
// import gallery13 from "../assets/gallery13.png";
// import gallery14 from "../assets/gallery14.png";
import gallery101 from "../assets/C0533.MP4_snapshot_00.14.522.jpg";
import gallery102 from "../assets/DJI_20251005181028_0214_D.jpg";
import gallery_i7 from "../assets/gallery/image7.png";
// import gallery from "../assets/gallery.png";
// import service1 from "../assets/service1.png";
import gallery11 from "../assets/gallery11.png";
// import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
// import service7 from "../assets/service7.png";
// import service8 from "../assets/service8.png";
import Akan from "../assets/Akan.png";
// import Akan from "../assets/Akan2.png";
import Juliet from "../assets/Juliet.png";
import Seiya from "../assets/Seiya.png";
import Barirah from "../assets/BARIRAH-TENON-PHOTO.png";
import Coo from "../assets/COOTENON PIX1.png";
import tenasammy from "../assets/TENASAMMYPASSPORT.jpg";
import video1 from "../assets/videos/SHORT 003.mp4";
// import video2 from "../assets/videos/SHORT 004.mp4";
// import video3 from "../assets/videos/SHORT 006_1.mp4";

export const Arrays = {
  gallery_images: [
    image1,
    image2,
    image3,
    gallery2,
    gallery9,
    gallery4,
    gallery8,
    gallery10,
    image4,
    image5,
    gallery11,
    image6,
    image7,
    gallery_i7,
  ],
  service_images: [
    video1,
    // video2,
    gallery101,
    gallery102,
    // video3,
    service4,
    // gallery12,

    // gallery13,
    // gallery14,
    // service8,
    // service1,
    service5,
    service6,
    gallery2,
    gallery1,
    gallery3,
    gallery6,
    gallery7,
    gallery9,
    // gallery,
  ],
  tenon_about: [
    {
      header: "Sustainable solutions",
      svg: globalIcon,
      text: "Our policy is to ensure that our services are in the best interests of our stakeholders and we are committed to this principle by the extent of research and stipulations we engage in before execution.",
    },
    {
      header: "Great customer experience",
      svg: communicationIcon,
      text: "We are committed to ensuring our clients have a great user experience as they engage our services and personnel.",
    },
    {
      header: "Real time reporting",
      svg: timerIcon,
      text: "As a company we place a very high value on integrity and transparency as such we ensure clients get real time reporting.",
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
    // {
    //   header: "User-Friendly Experience",
    //   svg: globalIcon,
    //   text: "We ensure that working with us is straightforward and seamless.",
    // },
    {
      header: "Quality Assurance",
      svg: communicationIcon,
      text: "We are commited to meeting the demands, requirements and expectations of our customers.",
    },
  ],

  tenon_features: [
    {
      header: "Freight forwarding",
      route: "/services#logistics",
      svg: freightIcon,
      card_info: {
        svg: bikeIcon,
        header: "Logistics",
        text: "Tenon Logistics operates a hybrid logistics model which combines various forms of transportation aimed at efficiently saving our clients time and costs.",
      },
      detailedInfo: {
        route: "services#freight",
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
      route: "/services#procurement",
      svg: haulageIcon,
      card_info: {
        svg: procurementIcon,
        header: "Integrated project procurement",
        text: "Given our specialty in procurement related activities, Tenon Logistics provides seamless, timely and delivery of cost-efficient procurement services for all kinds of projects.",
      },
      detailedInfo: {
        route: "/services#haulage",
        header: "Barging",
        text: "Our team of expert marine transport personnel are deployed to ensure that cargo transportation is executed safely and promptly through our  vast waters ways by barges and vessels.",
        header_two: "Trucking",
        text_two:
          "Taking advantage of our road networks, Tenon Logistics Limited has invested in and acquired various types of trucks suitable for all kinds of cargo delivery with the supervision of our dedicated transportation team.",
      },
    },

    {
      header: "Haulage",
      route: "/services#warehouse",
      svg: haulageIcon,
      card_info: {
        svg: warehouseIcon,
        header: "Warehousing",
        text: "Our warehouses are located at prime business locations and in areas close to business districts. Clients no longer have to worry about the safety and conditions of cargos when stored.",
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
        "An agent is any person who attracts clients or patronage of Tenon Logistics for a commission. To become a Tenon Logistics registered agent, the interested person must be registered and given a unique code.",
    },
    {
      question:
        "Can I list my asset under Tenon Logistics for trade Partnership?",
      answer:
        "Tenon Logistics welcomes all forms of profitable collaborations. We welcome the listing of assets such as Trucks, Warehouses, Jetties etc. subject to contract.",
    },
  ],

  team: [
    {
      image: tenasammy,
      name: "Tamaratena. I Sammy.",
      position: "Chief Executive Officer",
      bio: `Tamaratena Sammy is a seasoned supply chain management specialist who also holds a
law degree from the prestigious Igbinedion University with professional work experience
from various industries where he has contributed immensely to the supply chain
management and operational endeavors of these companies. <br/><br/> He is the founder and pioneer Chief Executive Officer of Tenon Logistics Limited.`,
    },
    {
      image: Coo,
      name: "Emmanuel Nkemakonam Eze, BSc, MBA, MBA, NIM, CILT",
      position: "Chief Operating Officer",
      bio: `Mr. Emmanuel leads the operational endeavors of the company, bringing to fore his
wealth of knowledge spanning over 20 years of professional industry experience, driving
operational efficiency and business profitability.`,
    },
    {
      image: Seiya,
      name: "Tamaramieseiya Sammy",
      position: "Company Secretary",
      bio: `Tamaramieseiya Sammy is a Legal Practitioner with experience across corporate and commercial law, governance, and company secretarial practice, supporting Boards on regulatory compliance and effective corporate oversight.<br /><br />She is the Founder of Cedar &amp; Olive Law Practice, which serves as Company Secretary to Tenon Logistics Limited. Her professional work includes a growing portfolio, with advisory engagements across Africa, the Middle East, and the United Kingdom.<br /><br />Tamaramieseiya brings a disciplined and practical governance perspective to Board deliberations, with a focus on accountability and sustainable oversight.`,
    },

    {
      image: Juliet,
      name: "Juliet Odumosu",
      position: "Business Development Lead",
      bio: "Juliet Odumosu, a seasoned marketing professional, with a background in business development and corporate sales. Her experience spans roles at Access Bank Nigeria and co-founding a Health-tech company. With affiliations in the Google for Startup Accelerators Alumni Network and the UK-Nigeria Future Females Founder's Network, Juliet is a force driving business growth at Tenon Logistics",
    },
    {
      image: Barirah,
      name: "Barirah Lawal Ibrahim",
      position: "Lead, Accounts and Invoicing",
      bio: "Barirah Leads the financial management activities of the company. She brings to fore her professional work experience spanning over eight years across various sectors with membership to various professional bodies.",
    },
    {
      image: Akan,
      name: "Akang Imoh",
      position: "Logistics Operations Manager",
      bio: "Akan Imoh is a graduate Business Management from the University of Calabar, a retired Soldier of the Nigerian Army and a member of the American Society of Industrial Security. He is a seasoned Security and Logistics operations professional with over 10 years of experience.",
    },
  ],
};
