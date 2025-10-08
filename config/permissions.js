// config/permissions.js - EXTENDED VERSION with Actions

const PERMISSIONS = {
  // ============== CRUD PERMISSIONS ==============
  
  // Client Management
  CLIENT_CREATE: 'client.create',
  CLIENT_READ: 'client.read',
  CLIENT_UPDATE: 'client.update',
  CLIENT_DELETE: 'client.delete',
  
  // Project Management
  PROJECT_CREATE: 'project.create',
  PROJECT_READ: 'project.read',
  PROJECT_UPDATE: 'project.update',
  PROJECT_DELETE: 'project.delete',
  
  // Site Updates
  SITE_UPDATE_CREATE: 'site_update.create',
  SITE_UPDATE_READ: 'site_update.read',
  SITE_UPDATE_UPDATE: 'site_update.update',
  SITE_UPDATE_DELETE: 'site_update.delete',
  
  // Meetings
  MEETING_CREATE: 'meeting.create',
  MEETING_READ: 'meeting.read',
  MEETING_UPDATE: 'meeting.update',
  MEETING_DELETE: 'meeting.delete',
  
  // Drawings
  DRAWING_CREATE: 'drawing.create',
  DRAWING_READ: 'drawing.read',
  DRAWING_UPDATE: 'drawing.update',
  DRAWING_DELETE: 'drawing.delete',
  
  // Users
  USER_CREATE: 'user.create',
  USER_READ: 'user.read',
  USER_UPDATE: 'user.update',
  USER_DELETE: 'user.delete',
  
  // Team Management
  TEAM_ADD_MEMBER: 'team.add_member',
  TEAM_REMOVE_MEMBER: 'team.remove_member',
  TEAM_UPDATE_MEMBER: 'team.update_member',
  
  
  // ============== ACTION-BASED PERMISSIONS ==============
  
  // Task Management Actions
  TASK_ASSIGN: 'task.assign',              // Assign task to someone
  TASK_REASSIGN: 'task.reassign',          // Change task assignee
  TASK_COMPLETE: 'task.complete',          // Mark task as complete
  TASK_APPROVE: 'task.approve',            // Approve completed task
  TASK_REJECT: 'task.reject',              // Reject task
  TASK_VIEW_ALL: 'task.view_all',          // View all tasks (not just assigned)
  TASK_VIEW_ASSIGNED: 'task.view_assigned', // View only your assigned tasks
  
  // Approval Workflow Actions
  APPROVAL_SUBMIT: 'approval.submit',       // Submit for approval
  APPROVAL_APPROVE: 'approval.approve',     // Approve request
  APPROVAL_REJECT: 'approval.reject',       // Reject request
  APPROVAL_REVIEW: 'approval.review',       // Review approval status
  APPROVAL_CANCEL: 'approval.cancel',       // Cancel approval request
  
  // Document/File Actions
  DOCUMENT_DOWNLOAD: 'document.download',   // Download documents
  DOCUMENT_UPLOAD: 'document.upload',       // Upload documents
  DOCUMENT_SHARE: 'document.share',         // Share with others
  DOCUMENT_EXPORT_PDF: 'document.export_pdf', // Export as PDF
  DOCUMENT_PRINT: 'document.print',         // Print documents
  
  // Report Generation Actions
  REPORT_GENERATE: 'report.generate',       // Generate reports
  REPORT_DOWNLOAD: 'report.download',       // Download reports
  REPORT_SCHEDULE: 'report.schedule',       // Schedule automated reports
  REPORT_VIEW_ANALYTICS: 'report.view_analytics', // View analytics dashboard
  
  // Payment/Invoice Actions
  INVOICE_GENERATE: 'invoice.generate',     // Generate invoice
  INVOICE_SEND: 'invoice.send',             // Send invoice to client
  INVOICE_APPROVE: 'invoice.approve',       // Approve invoice
  PAYMENT_PROCESS: 'payment.process',       // Process payment
  PAYMENT_REFUND: 'payment.refund',         // Issue refund
  
  // Budget Actions
  BUDGET_VIEW: 'budget.view',               // View budget
  BUDGET_ALLOCATE: 'budget.allocate',       // Allocate budget
  BUDGET_APPROVE: 'budget.approve',         // Approve budget changes
  BUDGET_REPORT: 'budget.report',           // Generate budget reports
  
  // Notification Actions
  NOTIFICATION_SEND: 'notification.send',   // Send notifications
  NOTIFICATION_BROADCAST: 'notification.broadcast', // Broadcast to team
  
  // Schedule/Calendar Actions
  SCHEDULE_VIEW: 'schedule.view',           // View schedule
  SCHEDULE_MANAGE: 'schedule.manage',       // Manage schedule
  SCHEDULE_CONFLICT_RESOLVE: 'schedule.conflict_resolve', // Resolve conflicts
  
  // Quality Control Actions
  QC_INSPECT: 'qc.inspect',                 // Perform inspection
  QC_APPROVE: 'qc.approve',                 // Approve quality
  QC_REJECT: 'qc.reject',                   // Reject quality
  QC_REPORT: 'qc.report',                   // Generate QC report
  
  // Safety Actions
  SAFETY_REPORT_INCIDENT: 'safety.report_incident', // Report safety incident
  SAFETY_VIEW_REPORTS: 'safety.view_reports',       // View safety reports
  SAFETY_APPROVE_CLEARANCE: 'safety.approve_clearance', // Approve safety clearance
  
  // Material Management Actions
  MATERIAL_REQUEST: 'material.request',     // Request materials
  MATERIAL_APPROVE: 'material.approve',     // Approve material request
  MATERIAL_ORDER: 'material.order',         // Order materials
  MATERIAL_RECEIVE: 'material.receive',     // Receive materials
  
  // Timesheet Actions=resource+actions
  TIMESHEET_SUBMIT: 'timesheet.submit',     // Submit timesheet
  TIMESHEET_APPROVE: 'timesheet.approve',   // Approve timesheet
  TIMESHEET_REJECT: 'timesheet.reject',     // Reject timesheet
  TIMESHEET_EXPORT: 'timesheet.export',     // Export timesheet
};


// Extended Role Permissions with Actions
const ROLE_PERMISSIONS = {
  organization_admin: {
    team: 'all',
    permissions: Object.values(PERMISSIONS) // Has ALL permissions including actions
  },
  
  admin: {
    site_supervisors: [
      // CRUD
      PERMISSIONS.SITE_UPDATE_CREATE,
      PERMISSIONS.SITE_UPDATE_READ,
      PERMISSIONS.SITE_UPDATE_UPDATE,
      PERMISSIONS.SITE_UPDATE_DELETE,
      PERMISSIONS.PROJECT_READ,
      PERMISSIONS.MEETING_CREATE,
      PERMISSIONS.MEETING_READ,
      PERMISSIONS.MEETING_UPDATE,
      PERMISSIONS.TEAM_ADD_MEMBER,
      PERMISSIONS.TEAM_REMOVE_MEMBER,
      PERMISSIONS.TEAM_UPDATE_MEMBER,
      
      // Action-Based
      PERMISSIONS.TASK_ASSIGN,
      PERMISSIONS.TASK_REASSIGN,
      PERMISSIONS.TASK_APPROVE,
      PERMISSIONS.TASK_REJECT,
      PERMISSIONS.TASK_VIEW_ALL,
      PERMISSIONS.APPROVAL_APPROVE,
      PERMISSIONS.APPROVAL_REJECT,
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.DOCUMENT_UPLOAD,
      PERMISSIONS.DOCUMENT_EXPORT_PDF,
      PERMISSIONS.REPORT_GENERATE,
      PERMISSIONS.REPORT_DOWNLOAD,
      PERMISSIONS.SCHEDULE_VIEW,
      PERMISSIONS.SCHEDULE_MANAGE,
      PERMISSIONS.QC_INSPECT,
      PERMISSIONS.QC_APPROVE,
      PERMISSIONS.QC_REJECT,
      PERMISSIONS.SAFETY_REPORT_INCIDENT,
      PERMISSIONS.SAFETY_VIEW_REPORTS,
      PERMISSIONS.MATERIAL_REQUEST,
      PERMISSIONS.MATERIAL_APPROVE,
      PERMISSIONS.TIMESHEET_APPROVE,
      PERMISSIONS.TIMESHEET_REJECT,
    ],
    
    architects: [
      // CRUD
      PERMISSIONS.DRAWING_CREATE,
      PERMISSIONS.DRAWING_READ,
      PERMISSIONS.DRAWING_UPDATE,
      PERMISSIONS.DRAWING_DELETE,
      PERMISSIONS.PROJECT_READ,
      PERMISSIONS.PROJECT_UPDATE,
      PERMISSIONS.MEETING_CREATE,
      PERMISSIONS.MEETING_READ,
      PERMISSIONS.TEAM_ADD_MEMBER,
      PERMISSIONS.TEAM_REMOVE_MEMBER,
      PERMISSIONS.TEAM_UPDATE_MEMBER,
      
      // Action-Based
      PERMISSIONS.TASK_ASSIGN,
      PERMISSIONS.TASK_VIEW_ALL,
      PERMISSIONS.APPROVAL_SUBMIT,
      PERMISSIONS.APPROVAL_APPROVE,
      PERMISSIONS.APPROVAL_REVIEW,
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.DOCUMENT_UPLOAD,
      PERMISSIONS.DOCUMENT_SHARE,
      PERMISSIONS.DOCUMENT_EXPORT_PDF,
      PERMISSIONS.DOCUMENT_PRINT,
      PERMISSIONS.REPORT_GENERATE,
      PERMISSIONS.REPORT_DOWNLOAD,
      PERMISSIONS.SCHEDULE_VIEW,
      PERMISSIONS.QC_REPORT,
    ],
    
    software_developers: [
      // CRUD
      PERMISSIONS.PROJECT_READ,
      PERMISSIONS.MEETING_READ,
      PERMISSIONS.TEAM_ADD_MEMBER,
      PERMISSIONS.TEAM_REMOVE_MEMBER,
      PERMISSIONS.TEAM_UPDATE_MEMBER,
      
      // Action-Based
      PERMISSIONS.TASK_VIEW_ASSIGNED,
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.REPORT_VIEW_ANALYTICS,
    ],
    
    human_resources: [
      // CRUD
      PERMISSIONS.USER_CREATE,
      PERMISSIONS.USER_READ,
      PERMISSIONS.USER_UPDATE,
      PERMISSIONS.CLIENT_CREATE,
      PERMISSIONS.CLIENT_READ,
      PERMISSIONS.CLIENT_UPDATE,
      PERMISSIONS.MEETING_CREATE,
      PERMISSIONS.MEETING_READ,
      PERMISSIONS.TEAM_ADD_MEMBER,
      PERMISSIONS.TEAM_REMOVE_MEMBER,
      PERMISSIONS.TEAM_UPDATE_MEMBER,
      
      // Action-Based
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.DOCUMENT_UPLOAD,
      PERMISSIONS.DOCUMENT_EXPORT_PDF,
      PERMISSIONS.REPORT_GENERATE,
      PERMISSIONS.REPORT_DOWNLOAD,
      PERMISSIONS.INVOICE_GENERATE,
      PERMISSIONS.INVOICE_SEND,
      PERMISSIONS.PAYMENT_PROCESS,
      PERMISSIONS.TIMESHEET_APPROVE,
      PERMISSIONS.TIMESHEET_REJECT,
      PERMISSIONS.TIMESHEET_EXPORT,
      PERMISSIONS.NOTIFICATION_SEND,
      PERMISSIONS.SCHEDULE_VIEW,
    ]
  },
  
  member: {
    site_supervisors: [
      // CRUD
      PERMISSIONS.SITE_UPDATE_CREATE,
      PERMISSIONS.SITE_UPDATE_READ,
      PERMISSIONS.SITE_UPDATE_UPDATE,
      PERMISSIONS.PROJECT_READ,
      PERMISSIONS.MEETING_READ,
      
      // Action-Based
      PERMISSIONS.TASK_VIEW_ASSIGNED,
      PERMISSIONS.TASK_COMPLETE,
      PERMISSIONS.APPROVAL_SUBMIT,
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.DOCUMENT_UPLOAD,
      PERMISSIONS.DOCUMENT_EXPORT_PDF,
      PERMISSIONS.SCHEDULE_VIEW,
      PERMISSIONS.QC_INSPECT,
      PERMISSIONS.SAFETY_REPORT_INCIDENT,
      PERMISSIONS.MATERIAL_REQUEST,
      PERMISSIONS.TIMESHEET_SUBMIT,
    ],
    
    architects: [
      // CRUD
      PERMISSIONS.DRAWING_CREATE,
      PERMISSIONS.DRAWING_READ,
      PERMISSIONS.DRAWING_UPDATE,
      PERMISSIONS.PROJECT_READ,
      PERMISSIONS.MEETING_READ,
      
      // Action-Based
      PERMISSIONS.TASK_VIEW_ASSIGNED,
      PERMISSIONS.TASK_COMPLETE,
      PERMISSIONS.APPROVAL_SUBMIT,
      PERMISSIONS.APPROVAL_REVIEW,
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.DOCUMENT_UPLOAD,
      PERMISSIONS.DOCUMENT_EXPORT_PDF,
      PERMISSIONS.DOCUMENT_PRINT,
      PERMISSIONS.SCHEDULE_VIEW,
      PERMISSIONS.TIMESHEET_SUBMIT,
    ],
    
    software_developers: [
      // CRUD
      PERMISSIONS.PROJECT_READ,
      PERMISSIONS.MEETING_READ,
      
      // Action-Based
      PERMISSIONS.TASK_VIEW_ASSIGNED,
      PERMISSIONS.TASK_COMPLETE,
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.TIMESHEET_SUBMIT,
    ],
    
    human_resources: [
      // CRUD
      PERMISSIONS.USER_READ,
      PERMISSIONS.CLIENT_READ,
      PERMISSIONS.MEETING_READ,
      
      // Action-Based
      PERMISSIONS.DOCUMENT_DOWNLOAD,
      PERMISSIONS.DOCUMENT_EXPORT_PDF,
      PERMISSIONS.TIMESHEET_SUBMIT,
      PERMISSIONS.SCHEDULE_VIEW,
    ]
  }
};

module.exports = { PERMISSIONS, ROLE_PERMISSIONS };