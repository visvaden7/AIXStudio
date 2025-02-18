import {CopyType, IntroductionText, Options, Portfolio, Project} from "../@types/domain.ts";
import * as step3video from '../assets/pages/main/section3/video'
import * as section2 from "../assets/pages/about/section2";
import * as section3 from "../assets/pages/about/section3";

export const filterBtnLabelForPortfolio = [
  '전체', '문제해결 체험', '상상 더하기 체험', '웹툰 생성 체험', 'AI 간편 체험'
]

export const portfolioList:Portfolio[] = [
  {
    idx: 1,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-23',
    heartRate: 10,
  },
  {
    idx: 2,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-22',
    heartRate: 10,
  },
  {
    idx: 3,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-21',
    heartRate: 10,
  },
  {
    idx: 4,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-20',
    heartRate: 10,
  },
  {
    idx: 5,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 10,
  },
  {
    idx: 6,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 11,
  },
  {
    idx: 7,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 12,
  },
  {
    idx: 8,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 15,
  },
  {
    idx: 9,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 20,
  },
  {
    idx: 10,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '상상 더하기 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 32,
  },
  {
    idx: 11,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 1,
  },
  {
    idx: 12,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 0,
  },
  {
    idx: 13,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 10,
  },
  {
    idx: 14,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 10,
  },
  {
    idx: 15,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 10,
  },
  {
    idx: 16,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '문제해결 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 2,
  },
  {
    idx: 17,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: 'AI 간편 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 11,
  },
  {
    idx: 18,
    imgUrl: 'https://placehold.co/150',
    projectTitle: '강남구 미래인재 스마트시티',
    title: '안전한 나의 친구',
    type: '웹툰 생성 체험',
    user: 'ahnji1',
    timeStamp: '2024-10-25',
    heartRate: 2,
  }
]

export const projectList: Project[] = [
  {
    idx: 1,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: 'AI 간편 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
  {
    idx: 2,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '문제해결 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
  {
    idx: 3,
    titleKo: '우주도시 문제해결 프로젝트',
    titleEn: 'build space city project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '상상 더하기 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-23',
  },
  {
    idx: 4,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '상상 더하기 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-24',
  },
  {
    idx: 5,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '문제해결 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-22',
  },
  {
    idx: 6,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    type: '상상 더하기 체험',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-21',
  },
  {
    idx: 7,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-20',
  },
  {
    idx: 8,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '문제해결 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-20',
  },
  {
    idx: 9,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
  {
    idx: 10,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
  {
    idx: 11,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '문제해결 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-19',
  },
  {
    idx: 12,
    titleKo: '우주도시 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-09-25',
  },
  {
    idx: 13,
    titleKo: '플래닛공원 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-12-11',
  },
  {
    idx: 14,
    titleKo: '플래닛공원 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '문제해결 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
  {
    idx: 15,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: true,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-23',
  },
  {
    idx: 16,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '웹툰 생성 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-21',
  },
  {
    idx: 17,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: '문제해결 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
  {
    idx: 18,
    titleKo: '플래닛파크 문제해결 프로젝트',
    titleEn: 'eco friendly project',
    subTitle: 'test',
    imgUrl: 'https://placehold.co/150',
    hash: ['#스마트시티','#미래도시','#아이디어','#창의사고력'],
    type: 'AI 간편 체험',
    story: '안녕하세요. 저는 2100년 스마트시티에 살고 있는 중학생 이기쁨, 이소망이에요. 우리가 살고있는 미래 스마트시티 강남은 모두가 행복한 도시예요! 하지만 기술은 점점 더 발전하고 생태환경도 점점 더 변해가면서 하루가 다르게 변해가는 강남의 모습을 보면서 "어떻게 하면 모두가 조금 더 살기 좋은 도시가 될 수 없을까?" 고민을 시작해보게 됐죠! 여러분 좋은 아이디어 없을까요? 저에게 알려주세요!',
    isSurvey: false,
    surveyUrl: 'https://newjr.aixstudio.kr/portfolio',
    timeStamp: '2024-10-25',
  },
]

// page indicator active / inactive
export const activeClass = "font-bold bg-[#FFE552] w-10 p-2 aspect-square rounded-full";
export const inactiveClass = "text-gray-600";


// project indicator title / subject
export const titleClass = 'text-[40px] text-[#EF4A60] font-extrabold leading-[60px] -tracking-[0.5px]'
export const subjectClass = 'text-[18px] mb-[15px] text-[#666] leading-7 -tracking-[0.5px]'

export const copies: CopyType[] = [
  {
    title: ["AI 탐험대에", "합류하세요"],
    content: ["우리가 앞으로 만나게 될 문제들을 찾아보며", "상상력을 발휘해 멋진 해결책을 떠올려봐요"],
    color: "#F96800",
  },
  {
    title: ["AI 친구가", "되어봐요"],
    content: ["AI와 함께 문제를 풀어가는 방법을 배우고", "직접 AI를 다루는 재미를 느껴봐요"],
    color: "#3654EA",
  },
  {
    title: ["내가 꿈꾸는", "세상을 만들기"],
    content: ["내가 상상한 아이디어를 통해 더 밝은 세상으로", "함께 멋진 변화를 만들어가요!"],
    color: "#FF455E",
  },
];

export const introductionTexts: IntroductionText[] = [
  {
    title: '상상 더하기 체험',
    content: '제시된 이미지를 바탕으로 창의적인 아이디어를 더해 문제를 해결하고, 상상한 이미지를 직접 만들어보며 재미있는 변화를 경험해요!',
    videoUrl: step3video.step1
  },
  {
    title: '웹툰 생성 체험',
    content: 'AI를 통해 주인공과 이야기를 설정하고 멋진장면들을 그려보며 창작의 재미를 느껴봐요! 나만의 이야기로 특별한 웹툰을 완성해보세요!',
    videoUrl: step3video.step2
  },
  {
    title: 'AI 간편 체험',
    content: 'AI와 함께 쉽게 만들어가는 재미있는 시간! 체험 과정을 재미있고 쉽게 커스터마이징 할 수 있어요. 무엇을 만들지 고민할 필요 없이 AI가 도와줄 거예요!',
    videoUrl: step3video.step3
  }
]

export const salesPoint = [
  {
    imgUrl: section2.understadingAI, title: 'Ai 이해', content: 'Ai 시대에 범용 Ai 발전을 수용하고,\n' +
      'Ai 기능을 이해하며 활용하는 사람'
  },
  {
    imgUrl: section2.coworkAi, title: 'Ai 협력', content: '자기 분야의 다양한 문제를 Ai와\n' +
      '협력하여 창의적으로 해결하는 사람'
  },
  {
    imgUrl: section2.valueOfAI, title: 'Ai 가치', content: '공동체를 위해 Ai를 적용하여\n' +
      '더 나은 세상으로 변화시키는 사람'
  },
]
export const section3Icons = [
  section3.blueStar, section3.redSun, section3.yellowFlower
]
export const competenciesList = [
  {key: "CA", title: "변화 적용력", content: '시대의 범용기술인 Ai 기술 수용에 대한 자신감을 바탕으로 새로운 지식과 기술을 능동적으로 수용할 수 있는 능력'},
  {key: "CT", title: "AI·컴퓨팅 사고력", content: '컴퓨터과학의 원리를 바탕으로 인공지능 및 컴퓨팅 시스템을 이용하여 복잡한 문제를 다양한 방식으로 해결할 수 있는 능력'},
  {key: "AI", title: "인공지능 소양", content: '인공지능의 개념과 작동 원리를 이해하고 삶 속에서 간단한 인공지능 기술을 활용할 수 있는 능력'},
  {
    key: "CST",
    title: "창의융합적 문제 해결역량",
    content: '인공지능 기술과 다양한 지식을 융합하여, 새로운 관점으로 창의적인 아이디어를 창출하여 다양한 문제를 해결하고 혁신할 수 있는 능력'
  },
  {key: "AHC", title: "AI·협업 역량", content: '사람과 인공지능이 서로 소통하여, 복잡한 문제를 협력하여 해결할 수 있는 능력'},
  {
    key: "PIC",
    title: "공익적 사고",
    content: '인공지능 기술로 인해 발생하는 사회적, 윤리적 변화를 이해하고, 공공의 이익에 도움이 되는 가치 판단과 포용적 행동을 실천할 수 있는 능력'
  }
];

export const apiUrl = 'https://newmng.aixstudio.kr/elementary_api'

export const options: Options[] = [
  {id: 0, value: 'latest', label: '최신순'},
  {id: 1, value: 'popular', label: '인기도'}
]