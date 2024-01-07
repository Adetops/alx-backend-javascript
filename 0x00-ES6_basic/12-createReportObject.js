export default function createReportObject(employeesList) {
	const anObject = {
		"allEmployees": employeesList,
		getNumberOfDepartments(employeesList) {
			return Object.keys(employeesList).length;
		}
	};
	return anObject;
}
