import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    
    <svg className={className} width="280" height="119" viewBox="0 0 280 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="119" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.003125 0.00735294)" />
        </pattern>
        <image id="image0" width="320" height="136" xlinkHref="https://lh3.googleusercontent.com/A_BG3F4Jo-NSjAvv9uqduQvVQFKOXLoyeKYzqr2yoYsQdLI991onDlyWX2ZMWn0W_8o" />
        </defs>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;