import * as React from 'react'
import { Link } from 'react-router-dom'

import { FooterStyled,FooterSeaCreature,FooterTitle,FooterIconSection, FooterIcon, FooterSection, FooterLink, FooterLogo, FooterContainer} from './Footer.style'

export const FooterView: any = () => (
  <FooterStyled>
    <FooterContainer>
    <FooterLogo>
      <Link to="/">
        <img src="/logo.svg"  width="300px" alt="Logo"/>
      </Link>
    </FooterLogo>
    <FooterSection>
      <FooterTitle>
        USEFUL INFORMATION
      </FooterTitle>
      <FooterLink>
        <Link to="/about">About</Link>
      </FooterLink>
      <FooterLink>
      <Link to="/terms">
        Terms
        </Link>
      </FooterLink>
      <FooterLink>
        <a href="https://oceanprotocol.com">Ocean Protocol</a>
      </FooterLink>
    </FooterSection>
    <FooterSection>
      <FooterTitle>
        GET IN TOUCH 
      </FooterTitle>
      <FooterIconSection>
        <FooterIcon>
        <a href="https://twitter.com/OceanAcademy_">
          <img src="/brands/twitter.svg"  alt="Logo"/>
        </a>
        </FooterIcon>
        <FooterIcon>
        <a href="oceanacademy@protonmail.com">
            <img src="/icons/envelope.svg"  alt="Logo"/>
        </a>
        </FooterIcon>
      </FooterIconSection>
    </FooterSection>
    <FooterSection>
      <FooterTitle>
        JOIN THE COMMUNITY
      </FooterTitle>
      <FooterIconSection>
        <FooterIcon>
        <a href="https://discord.gg/BPPHQksyPd">
          <img src="/brands/discord.svg" className="discord"  alt="Logo"/>
        </a>
        </FooterIcon>
        <FooterIcon>
        <a href="https://github.com/learn-ocean/ocean-academy">
            <img src="/brands/github.svg"  alt="Logo"/>
        </a>
        </FooterIcon>
      </FooterIconSection>
    </FooterSection>

    <FooterSeaCreature>
      <img src="/creatures/jellyfish-grid.svg" width="150"/>
    </FooterSeaCreature>

    </FooterContainer>

  </FooterStyled>
)
