import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Tag } from './ui/Tag';
import { Switch } from './ui/Switch';

// This is a placeholder icon. You can import a real one from your assets folder.
const ImageIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.25 3.75H2.75C2.10228 3.75 1.75 4.10228 1.75 4.75V19.25C1.75 19.8977 2.10228 20.25 2.75 20.25H21.25C21.8977 20.25 22.25 19.8977 22.25 19.25V4.75C22.25 4.10228 21.8977 3.75 21.25 3.75Z" stroke="#373ae5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.75 9.75C8.44036 9.75 9 9.19036 9 8.5C9 7.80964 8.44036 7.25 7.75 7.25C7.05964 7.25 6.5 7.80964 6.5 8.5C6.5 9.19036 7.05964 9.75 7.75 9.75Z" stroke="#373ae5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.25 15.25L17.25 10.25L2.75 20.25" stroke="#373ae5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ControlRow = ({ label, checked, onChange }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100">
    <span className="text-m text-gray-700">{label}</span>
    <Switch checked={checked} onChange={onChange} />
  </div>
);

export const CardShowcase = () => {
  const [showPrimaryTag, setShowPrimaryTag] = useState(true);
  const [showResortName, setShowResortName] = useState(true);
  const [showRoomDetails, setShowRoomDetails] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showShowtimes, setShowShowtimes] = useState(true);
  const [showSubcategories, setShowSubcategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [buttonType, setButtonType] = useState('Single');

  return (
    <div className="flex flex-col md:flex-row gap-3x w-full max-w-5xl p-4 font-sans">
      <div className="w-full md:w-1/3 bg-white p-3x rounded-lg shadow-lg h-fit">
        <h3 className="text-xl font-bold mb-2x">Card Properties</h3>
        <div className="space-y-2">
          <ControlRow label="Primary Tag" checked={showPrimaryTag} onChange={setShowPrimaryTag} />
          <ControlRow label="Resort name" checked={showResortName} onChange={setShowResortName} />
          <ControlRow label="Room details" checked={showRoomDetails} onChange={setShowRoomDetails} />
          <ControlRow label="Description" checked={showDescription} onChange={setShowDescription} />
          <ControlRow label="Showtimes" checked={showShowtimes} onChange={setShowShowtimes} />
          <ControlRow label="Subcategories" checked={showSubcategories} onChange={setShowSubcategories} />
          <ControlRow label="Price" checked={showPrice} onChange={setShowPrice} />
          <div className="flex items-center justify-between py-2">
            <span className="text-m text-gray-700">Button Type</span>
            <select
              value={buttonType}
              onChange={(e) => setButtonType(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm text-m focus:border-digital-500 focus:ring-digital-500"
            >
              <option>Single</option>
              <option>Double</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="w-[221px] flex-shrink-0">
        <div className="bg-white rounded-md shadow-elevation-1 overflow-hidden">
          <div className="relative flex items-center justify-center h-[221px] bg-gray-100">
             <ImageIcon />
            <div className="absolute top-2x left-2x">
              {showPrimaryTag && <Tag label="Tags" variant="primary" />}
            </div>
          </div>
          <div className="p-3x flex flex-col gap-1x">
            <h4 className="text-l font-medium text-digital-900">Title</h4>
            {showResortName && <p className="text-m font-normal text-digital-900">Resort name</p>}
            {showRoomDetails && <p className="text-s font-normal text-gray-600">520 sq ft • 2 beds • 3 guests</p>}
            {showDescription && <p className="text-s font-normal text-gray-600">Lorem ipsum dolor sit amet consectetur. Libero dui neque vitae odio. Nunc risus ultricies convallis ut in feugiat lacus.</p>}
            <div className="flex flex-col">
                {showShowtimes && <p className="text-m font-medium text-digital-900">Today, 10:30 PM & more</p>}
                {showSubcategories && <p className="text-s font-normal text-gray-600">$$$$ • Asian</p>}
            </div>
            {showPrice && (
              <div className="pt-1x">
                <p className="text-xl font-bold text-digital-900">From $1,249.99</p>
                <p className="text-xs font-normal text-gray-600">Ticket Price + $21.14 Ticket Service Fee) Excluding taxes</p>
              </div>
            )}
            <div className="pt-2x">
              {buttonType === 'Single' && <Button label="View Details" variant="tertiary" size="large" className="w-full" />}
              {buttonType === 'Double' && (
                <div className="flex gap-1x">
                  <Button label="Secondary" variant="secondary" size="large" className="w-full" />
                  <Button label="Primary" variant="primary" size="large" className="w-full" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};