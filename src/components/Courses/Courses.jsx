import Course from "../Course/Course";

const Courses = ({ courses, handleSelect }) => {
  return (
    <div className="sm:mb-8 md:w-3/4 grid md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          key={course.id}
          handleSelect={handleSelect}
          course={course}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
