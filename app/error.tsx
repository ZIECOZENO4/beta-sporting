'use client'
import { NextApiResponse, NextPageContext } from 'next';
import './globals.css'
function Error({ statusCode }: { statusCode: number }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: { res: NextApiResponse | null, err: NextPageContext["err"] }) => {
  const statusCode = res ? res.statusCode : 404;
  return { statusCode };
};

export default Error;