export default function AccessablePrivateRoute() {
  return (
    <>
      <h1>You can view this page in the browser. using "%5F" prefixing.</h1>
      <p>
        You can create URL segments that start with an underscore by prefixing
        the folder name with %5F (the URL-encoded form of an underscore):
        %5FfolderName . If you don't use private folders, it would be helpful to
        know Next.js special file conventions to prevent unexpected naming
        conflicts.
      </p>
    </>
  );
}
