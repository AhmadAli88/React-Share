/*eslint-disable*/
import React, { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'react-share';

const SocialShareDemo = () => {
  const [shareCount, setShareCount] = useState({
    facebook: 0,
    twitter: 0,
    linkedin: 0,
  });

  // Example content to share
  const shareUrl = 'https://your-website.com';
  const title = 'Check out this awesome content!';
  const description =
    'This is a detailed description of the content you want to share.';
  const hashtags = ['reactjs', 'javascript', 'webdev'];
  const image = 'https://your-website.com/image.jpg';

  // Custom share quote for Facebook
  const quote = 'I found this amazing article, check it out!';

  // Email sharing details
  const subject = 'Check this out!';
  const body = 'I thought you might be interested in this content.';

  // LinkedIn specific details
  const linkedinSummary = 'A comprehensive guide to React development';
  const linkedinSource = 'Your Website Name';

  // Callback functions for share counts
  const handleFacebookCount = (count) => {
    setShareCount((prev) => ({ ...prev, facebook: count }));
  };

  const handleTwitterCount = (count) => {
    setShareCount((prev) => ({ ...prev, twitter: count }));
  };

  // Custom styles
  const buttonStyle = {
    margin: '0 8px',
    cursor: 'pointer',
  };

  const sectionStyle = {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
  };

  return (
    <div>
      {/* Basic Sharing */}
      <section style={sectionStyle}>
        <h2>Basic Social Sharing</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <FacebookShareButton url={shareUrl} quote={quote} style={buttonStyle}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={title}
            hashtags={hashtags}
            style={buttonStyle}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton
            url={shareUrl}
            title={title}
            summary={linkedinSummary}
            source={linkedinSource}
            style={buttonStyle}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </section>

      {/* Advanced Sharing with Custom Content */}
      <section style={sectionStyle}>
        <h2>Advanced Sharing Options</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=' - '
            style={buttonStyle}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <TelegramShareButton url={shareUrl} title={title} style={buttonStyle}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <EmailShareButton
            url={shareUrl}
            subject={subject}
            body={body}
            style={buttonStyle}
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </section>

      {/* Messenger Specific Sharing */}
      <section style={sectionStyle}>
        <h2>Facebook Messenger Sharing</h2>
        <FacebookMessengerShareButton
          url={shareUrl}
          appId='YOUR_FACEBOOK_APP_ID' // Required for Messenger sharing
          style={buttonStyle}
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </section>

      {/* Share Count Display */}
      <section style={sectionStyle}>
        <h2>Share Counts</h2>
        <p>Facebook Shares: {shareCount.facebook}</p>
        <p>Twitter Shares: {shareCount.twitter}</p>
        <p>LinkedIn Shares: {shareCount.linkedin}</p>
      </section>

      {/* Custom Styled Buttons */}
      <section style={sectionStyle}>
        <h2>Custom Styled Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <FacebookShareButton url={shareUrl}>
            <div className='custom-share-button'>
              Share on Facebook
              <FacebookIcon size={24} round />
            </div>
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl}>
            <div className='custom-share-button'>
              Tweet This
              <TwitterIcon size={24} round />
            </div>
          </TwitterShareButton>
        </div>
      </section>
    </div>
  );
};

export default SocialShareDemo;
