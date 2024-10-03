"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";
import {
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { ParagraphText, SectionText } from "../atoms/Text";

interface Social {
  name: string;
  url: string;
  icon: IconType;
}

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sebastian-saldarriagac/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sebas.s.cardona/",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    url: "https://github.com/SebastianSaldarriagaC1",
    icon: FaGithub,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/573107147030",
    icon: FaWhatsapp,
  },
];

const email = "sebastian.saldarriagac1@gmail.com";

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        },
        () => fallbackCopyEmail()
      );
    } else {
      fallbackCopyEmail(); // Fallback for older browsers or mobile
    }
  };

  const fallbackCopyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, textArea.value.length); // For mobile devices

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }

    document.body.removeChild(textArea); // Clean up
  };
  return (
    <div id="contact" className="mx-auto w-11/12 sm:w-10/12">
      <SectionText text="Contact Me" />

      <div className="flex flex-col justify-evenly sm:flex-row w-10/12 mx-auto sm:items-center">
        <div className="flex flex-col w-full sm:w-1/2">
          <ParagraphText
            text="Feel free to reach out via email or connect with me on my social media profiles."
            extraClass="text-center my-6"
          />
          <div className="flex justify-center items-center space-x-2 bg-gray-200 p-3 rounded-md">
            <code className="text-[10px] md:text-lg highlight-text">
              {email}
            </code>
            <button
              onClick={handleCopyEmail}
              className="unactive-category transition-colors"
              title="Copy email"
            >
              <FaCopy className="text-xl" />
            </button>
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="unactive-category transition-colors"
              title="Send email"
            >
              <FaEnvelope className="text-xl" />
            </button>
          </div>

          {copied && (
            <p className="text-sm text-green-600 mt-2">
              Email copied to clipboard!
            </p>
          )}
        </div>
        <hr className="sm:rotate-90 w-10/12 sm:w-2/12 mx-auto my-5" />
        <div className="flex justify-between my-6 md:grid md:grid-cols-2 md:gap-4 md:w-1/2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl external-link transition-colors flex flex-col items-center"
            >
              {social.icon({ size: 30 })}
              <span className="sr-only md:not-sr-only text-[16px]">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
