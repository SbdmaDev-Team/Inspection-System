// Copyright (c) 2024, amr + yousif and contributors
// For license information, please see license.txt

frappe.ui.form.on('AssignmentReport', {
	 refresh: function(frm) {
		console.log(frm.doc);
		
	 },
	 before_save: function(frm) {
		console.log(frm.doc);
		if (frm.doc.assignment) {
            frappe.call({
                method: 'frappe.client.set_value',
                args: {
                    doctype: 'Assignment',    // نوع المستند الأصلي
                    name: frm.doc.assignment, // معرف المستند الأصلي
                    fieldname: 'workflow_state',       // الحقل الذي تريد تحديثه
                    value: 'Pending Approval'  // الحالة الجديدة التي تريد تعيينها
                },
                callback: function(response) {
                    if (!response.exc) {
                        frappe.msgprint(__('Assignment status updated successfully.'));
                    } else {
                        frappe.msgprint(__('Failed to update Assignment status.'));
                    }
                }
            });
        } else {
            frappe.msgprint(__('Assignment is not Uplouded Report.'));
        }	
	 }
});
