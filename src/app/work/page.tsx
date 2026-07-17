import type { Metadata } from 'next';
import WorkTimeline from './WorkTimeline';

export const metadata: Metadata = {
  title: 'Helena Lucia – Work',
  description:
    'A decade of data engineering across Intel, Cylance, Cox Automotive, and Flashpoint. Senior engineer returning to tech with LLM and RAG expertise.',
};

export default function Work() {
  return <WorkTimeline />;
}
