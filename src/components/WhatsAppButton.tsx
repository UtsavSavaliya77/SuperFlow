import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pumpsData';

interface WhatsAppButtonProps {
  modelName?: string;
  className?: string;
  text?: string;
  label?: string;
  variant?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  modelName, 
  className = '', 
  text,
  label,
  message: customMessage
}) => {
  const buttonText = text || label || 'Inquire on WhatsApp';
  const defaultMessage = modelName 
    ? `Hello SuperFlow (Royal Manufacture), I am interested in getting a quotation and availability for Model: ${modelName}.`
    : `Hello SuperFlow (Royal Manufacture), I would like to inquire about your submersible pump sets & dealership opportunities.`;

  const finalMessage = customMessage || defaultMessage;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(finalMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00a859] hover:bg-[#008f4c] active:bg-[#007a41] text-white font-bold rounded-[3px] transition-colors ${className}`}
    >
      <WhatsAppIcon className="w-4 h-4 text-white" />
      <span>{buttonText}</span>
    </a>
  );
};
