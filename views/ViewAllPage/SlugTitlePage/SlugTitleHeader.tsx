import React from 'react';
import ViewAllTitle from '../ViewAllTitle';
import TitleSlug from './TitleSlug';

interface SlugTitleHeaderProps {
  title: string;
}

const SlugTitleHeader: React.FC<SlugTitleHeaderProps> = ({ title }) => {
  return (
    <div className="max-w-1440 mx-auto px-20">
      <TitleSlug>{title}</TitleSlug>
    </div>
  );
};

export default SlugTitleHeader;
