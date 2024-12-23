import React from 'react';
import { IconSearch, IconMessage, IconPhoto, IconVolume, IconChevronRight } from '@tabler/icons-react';

function NavigationMenu({ activeTab, setActiveTab, setShowMenu }) {
  const menuItems = [
    {
      id: 'search',
      icon: IconSearch,
      label: 'Search',
      description: 'Search the web with AI assistance',
      disabled: false
    },
    {
      id: 'image',
      icon: IconPhoto,
      label: 'Image Generator',
      description: 'Create AI-generated images',
      disabled: false
    },
    {
      id: 'chat',
      icon: IconMessage,
      label: 'Chat',
      description: 'Chat with AI models',
      disabled: false
    },
    {
      id: 'tts',
      icon: IconVolume,
      label: 'Text to Speech',
      description: 'Transform text into lifelike speech',
      disabled: true // Only works Locally CORS problem
    }
  ];

  return (
    <div className="absolute left-0 mt-2 w-72 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 overflow-hidden">
      <div className="p-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (!item.disabled) {
                setActiveTab(item.id);
                setShowMenu(false);
              }
            }}
            className={`w-full px-4 py-3 flex items-center gap-4 rounded-xl transition-all duration-200 group
              ${activeTab === item.id 
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}
              ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={item.disabled}
          >
            <div className={`p-2 rounded-lg ${activeTab === item.id 
              ? 'bg-blue-100 dark:bg-blue-800' 
              : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'}`}>
              <item.icon size={20} />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
            <IconChevronRight 
              size={20} 
              className={`text-gray-400 transition-transform duration-200
                ${activeTab === item.id ? 'translate-x-1 text-blue-500' : 'group-hover:translate-x-1'}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavigationMenu;