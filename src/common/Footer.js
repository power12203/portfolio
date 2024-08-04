// Footer.js
import React from "react";
import "./Footer.css";

// 이미지 파일 경로 설정
import facebookIcon from "../assets/footerImg/Facebook.png";
import twitterIcon from "../assets/footerImg/Twitter.png";
import instagramIcon from "../assets/footerImg/Instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>회사 정보</h4>
          <ul>
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#">팀</a>
            </li>
            <li>
              <a href="#">채용</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>고객 지원</h4>
          <ul>
            <li>
              <a href="#">도움말 센터</a>
            </li>
            <li>
              <a href="#">취소 옵션</a>
            </li>
            <li>
              <a href="#">비밀번호 복구</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>법적 고지</h4>
          <ul>
            <li>
              <a href="#">이용 약관</a>
            </li>
            <li>
              <a href="#">개인정보 보호정책</a>
            </li>
            <li>
              <a href="#">쿠키 정책</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>연락처</h4>
          <p>123 숙소 앱 길, 서울, 대한민국</p>
          <p>전화: 010-1234-5678</p>
          <p>이메일: support@accommodationapp.com</p>
        </div>
        <div className="footer-section">
          <h4>소셜 미디어</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 숙소 앱. 모든 권리 보유.</p>
      </div>
    </footer>
  );
};

export default Footer;
