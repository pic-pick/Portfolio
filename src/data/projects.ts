import chartImg from "../assets/chartimg.png"
import reviewImg from "../assets/reviewimg.png"
import myplannerImg from "../assets/myplannerimg.png"
import portfolioImg from "../assets/portfolio.png"
import daesulIng from "../assets/daesulImg.png"
import dangdangtripImg from "../assets/dangdangtrip.png"
import type { ProjectItem } from "../types/project"

export const projects: ProjectItem[] = [
    {
        info: '6인 풀스택 팀 프로젝트 [2025.10 ~ 2025.12]',
        title: 'Re:View (풀스택 6인 팀프로젝트)',
        description:
            '사용자의 피부 타입을 기반으로 맞춤 화장품을 추천하는 리뷰 중심 쇼핑몰 프로젝트입니다. 로그인/회원관리, 마이페이지, 리뷰 등을 작업한 팀 프로젝트입니다.',
        stack: ['React', 'JavaScript', 'Spring Boot', 'REST API', 'Git'],
        githubUrl: 'https://github.com/pic-pick/Re_View',
        demoUrl: 'https://www.youtube.com/embed/BPjU2JVhdm4',
        image: reviewImg,
        detailType: 'review-detail',
    },
    {
        info: '1인 개인 프로젝트 [2026.03]',
        title: '댕댕트립 (1인 개인 프로젝트)',
        description:
            '반려동물과 함께 갈 수 있는 여행지를 찾을 수 있는 웹 서비스입니다. 한국관광공사 공공 API를 연동해 지역/카테고리/키워드 복합 검색과 반려동물 동반 조건 배지를 제공합니다.',
        stack: ['React', 'TypeScript', 'Spring Boot', 'Java', 'Axios', 'CSS Modules'],
        githubUrl: 'https://github.com/pic-pick/dangdangtrip',
        liveUrl: 'https://dangdangtrip.vercel.app/',
        image: dangdangtripImg,
        detailType: 'dangdang-detail',
    },
    {
        info: '1인 개인 프로젝트 [2025.11 ~ 2025.12]',
        title: '차트인사이트 AI (1인 개인 프로젝트)',
        description:
            'React와 Python을 사용해 주가 데이터를 분석하는 프로젝트입니다. TradingView 차트 라이브러리와 yfinance API를 활용해 시계열 주가 데이터를 시각화하고, OpenAI 기반 NLP 프롬프트 처리를 실험하며 데이터 분석 흐름을 구현하는 개인 프로젝트입니다.',
        stack: ['React', 'Python', 'TradingView', 'yfinance API', 'OpenAI API'],
        pdfUrl: '/chartinsight-ai.pdf',
        githubUrl: 'https://github.com/pic-pick/Chart-Insight-AI',
        image: chartImg,
        detailType: 'chartinsight-detail',
    },
    {
        info: '개인 프로젝트 [2026.03]',
        title: '대설 빙수 웹 퍼블리싱 사이트',
        description:
            '기존 대설 웹사이트를 참고하여 UI구조를 재구성하고 퍼블리싱한 프로젝트입니다.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Figma'],
        githubUrl: 'https://github.com/pic-pick/daesul-web-publishing',
        liveUrl: 'https://daesul-web-publishing.vercel.app/',
        image: daesulIng,
        detailType: 'daesul-detail',
    },
    {
        info: '1인 개인 프로젝트 [2026.03]',
        title: '포트폴리오 웹사이트 (1인 개인 프로젝트)',
        description:
            'React와 TypeScript를 기반으로 직접 디자인하고 구현한 개인 포트폴리오 웹사이트입니다. 프로젝트 소개, 기술 스택, 연락처, 상세 모달 구성을 통해 저의 개발 경험과 결과물을 한눈에 볼 수 있도록 구성했습니다.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        githubUrl: 'https://github.com/pic-pick/Portfolio',
        liveUrl: 'https://portfolio-9fmvpypur-pro5kinghwan-5655s-projects.vercel.app/',
        image: portfolioImg,
        detailType: 'portfolio-detail',
    },
    {
        info: '웹개발 경진대회 해커톤 프로젝트 [2022.9]',
        title: '마이 플래너 (웹개발 경진대회 해커톤)',
        description:
            '웹 개발 경진대회에서 진행한 여행 일정 공유 플랫폼 프로젝트입니다. 웹 퍼블리싱(HTML/CSS 마크업)개발을 목표로 했으며 사용자 친화적인 UI 구조와 반응형 레이아웃을 구현했고, 해당 프로젝트로 대회 수상을 경험했습니다.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Web Publishing'],
        githubUrl: 'https://github.com/pic-pick/MY_PLANNER',
        image: myplannerImg,
    },
]