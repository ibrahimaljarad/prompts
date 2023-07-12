import Link from "next/link";

const Form = ({ post, handleSubmit, setPost, type, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={post.prompt}
        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        className="from_textarea"
      ></textarea>
      <textarea
        value={post.tag}
        onChange={(e) => setPost({ ...post, tag: e.target.value })}
        className="from_textarea"
      ></textarea>
      <div>
        <Link href="/"> cancel</Link>
        <button type="submit" disabled={submitting}>
          {submitting ? `${type}...` : type}
        </button>
      </div>
    </form>
  );
};

export default Form;
