import React from 'react';

interface PublicationProps {
  date: string;
  title: string;
  authors: string;
  venue: string;
  status?: string;
  paperUrl?: string;
}

const Publication = ({ date, title, authors, venue, status, paperUrl }: PublicationProps) => {
  // Logic to highlight your name while keeping others faint
  const renderAuthors = (authorStr: string) => {
    const namePattern = /(Edwin Kayang|Kayang, Edwin P|Edwin P\. Kayang)/g;
    const parts = authorStr.split(namePattern);
    
    return parts.map((part, i) => 
      namePattern.test(part) ? (
        <span key={i} className="text-white font-semibold">{part}</span>
      ) : (
        <span key={i} className="text-gray-500">{part}</span>
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-10 last:mb-0">
      {/* Date Column - Cleaner Styling */}
      <div className="w-24 shrink-0 text-sm font-medium text-gray-500 pt-1.5 uppercase tracking-widest">
        {date}
      </div>
      
      {/* Content Column */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white leading-tight">
          {title}
          {status && (
            <span className="text-gray-600 font-normal italic text-sm ml-2">
              ({status})
            </span>
          )}
        </h3>
        
        <p className="mt-2 text-sm leading-relaxed">
          {renderAuthors(authors)}
        </p>
        
        <p className="text-gray-500 italic text-sm mt-1">
          {venue}
        </p>

        {paperUrl && (
          <div className="mt-3">
            <a 
              href={paperUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 text-xs hover:underline"
            >
              [ Paper ]
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publication;