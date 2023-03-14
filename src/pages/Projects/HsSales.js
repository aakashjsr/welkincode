import hsSales1 from "../../assets/images/portfolio/hs_sales/1.png";
import hsSales2 from "../../assets/images/portfolio/hs_sales/2.png";
import hsSales3 from "../../assets/images/portfolio/hs_sales/3.png";
import hsSales4 from "../../assets/images/portfolio/hs_sales/4.png";
import hsSales5 from "../../assets/images/portfolio/hs_sales/5.png";
import hsSales6 from "../../assets/images/portfolio/hs_sales/6.png";
import hsSales7 from "../../assets/images/portfolio/hs_sales/7.png";
import hsSales8 from "../../assets/images/portfolio/hs_sales/8.png";
import hsSales9 from "../../assets/images/portfolio/hs_sales/9.png";
import hsSales10 from "../../assets/images/portfolio/hs_sales/10.png";
import hsSales11 from "../../assets/images/portfolio/hs_sales/11.png";
import ProjectTemplate from "./ProjectTemplate";
import { useEffect } from "react";

export default function HsSales() {
  const images = [
    hsSales1,
    hsSales2,
    hsSales3,
    hsSales4,
    hsSales5,
    hsSales6,
    hsSales7,
    hsSales8,
    hsSales9,
    hsSales10,
    hsSales11,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    "3rd part API integrations to link to various marketplaces",
    "Templated categories to auto generate product description based on certain parameters",
    "Ability to create vendors, products, categories.",
    "Import batches containing items and track details on a serial number level",
    "Import sales data from third party integrations to track performance of products",
    "Option to manually checkout products sold at retail outlets",
    "Auto generate serial number for a variety of products",
    "Option to import a bunch of products via CSV",
    "Export reports related to a batch of products",
    "Generate PDF containing barcodes for products based on their serial numbers",
  ];

  const skills = ["django", "react", "postgres", "docker", "aws"];

  const metaContent =
    "I'm a freelance web developer. I develop full stack applications using django, python, react, javascript, docker and aws";

  const pageTitle = "HS Sales";

  const pageContent = (
    <p>
      HS Sales GmbH (alias Toredo Trading), based in Munich, is a e-commerce
      company specializing in consumer electronic products such as smartphones,
      tablets and smart home products. The HS web application is an inventory
      management platform that enables the admins to list and sell products on
      multiple platforms like eBay, Amazon, Rakuten etc.
    </p>
  );

  return (
    <ProjectTemplate
      {...{ images, highlights, skills, metaContent, pageTitle, pageContent }}
    />
  );
}
