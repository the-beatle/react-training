import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>Javascript Training</Head>
      <CleanCode />;
      <NamingElements />;
    </div>
  );
}

export const CleanCode = () => {
  return (
    <>
      <h1>Clean Code</h1>
      <h2>NAMING</h2>
      <ul>
        <h3>RULES OF NAMING</h3>
        <li>
          <strong>Reveal Intention: </strong>
          <span>
            The name of a variable function, or class should tell you three
            things: why it exists, what it does, and how it is used. If a name
            requires a comment, then the name does not reveal its intent.
          </span>
        </li>
        <li>
          <strong>{"Don't be Cute: "}</strong>
          <span>
            Choose Clarity over Humor. say what you mean. Mean what you say{" "}
          </span>
        </li>
        <li>
          <strong>Searchable Names: </strong>
          <span>
            {
              " Names should be easy to locate across a body of text. Don't use the same name in multiple places. Single-letter names should ONLY be used as local variables inside short methods."
            }
          </span>
        </li>
        <li>
          <strong>Avoid Encoding: </strong>
          <span>Avoid Hungarian notation, member prefixes, etc.</span>
        </li>
        <li>
          <strong>One Word, One Meaning: </strong>
          <span>
            Be consistent throughout your code by using one word per abstract
            concept. To eliminate confusion, use words that only have one
            meaning.
          </span>
        </li>
      </ul>
    </>
  );
};

export const NamingElements = () => {
  return (
    <>
      <ul>
        <h3>NAMING OBJECTS</h3>
        <li>
          <strong>Class and Objects Names</strong>
          <ul>
            <li>Use noun phrase names</li>
            <li>{"Don't use verbs"}</li>
          </ul>
        </li>
        <li>
          <strong>Method Names</strong>
          <ul>
            <li>Long scope = Short name</li>
            <li>Short scope = Long name</li>
          </ul>
        </li>
        <li>
          <strong>Problem Domains</strong>
          <ul>
            <li>Use simple terms that clearly identify the problem</li>
            <li>Avoid programmer language</li>
          </ul>
        </li>
        <li>
          <strong>Variable and parameters</strong>
          <ul>
            <li>Long scope = Long name</li>
            <li>Short scope = Short name</li>
            <li>
              Single-letter names shoud be used only for:
              <ul>
                <li>Counter variables for simple for loops</li>
                <li>Exception instances in Catch blocks</li>
                <li>Arguments of very short functions</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
